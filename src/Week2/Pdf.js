import React, { useState, useRef, useEffect, useCallback } from 'react'
import { pdfjs } from 'react-pdf'
import styled from 'styled-components'
import { fabric } from 'fabric'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

const Pdf = (props) => {
  const { signatureImg } = props

  const [message, setMessage] = useState('')
  const canvasRef = useRef(null)
  const exportRef = useRef(null)

  const [exportCanvas, setExportCanvas] = useState(null)

  const handlePdf = (e) => {
    const file = e.target.files[0]

    if (file.type === 'application/pdf') {
      // 判斷檔案大小
      if (file.size > 10000000) {
        setMessage('檔案超過10Mb')

        return
      }
      const fileReader = new FileReader()

      fileReader.onload = function () {
        const pdfData = new Uint8Array(this.result)
        const loadingTask = pdfjs.getDocument({ data: pdfData })

        loadingTask.promise.then(
          (pdf) => {
            const pageNumber = 1

            pdf.getPage(pageNumber).then((page) => {
              const scale = 1
              const viewport = page.getViewport({ scale })

              canvasRef.current.height = viewport.height
              canvasRef.current.width = viewport.width

              const renderContext = {
                viewport,
                canvasContext: canvasRef.current.getContext('2d'),
              }

              const renderTask = page.render(renderContext)

              renderTask.promise.then(() => {
                console.log('Page rendered')
              })
            })
          },
          (reason) => console.error(reason)
        )
      }

      fileReader.readAsArrayBuffer(file)
    } else {
      setMessage('請上傳pdf檔案')
    }
  }

  const handleExport = () => {
    const bgImg = canvasRef.current.toDataURL()

    fabric.Image.fromURL(bgImg, (img) => {
      exportCanvas.setBackgroundImage(bgImg).renderAll()
      exportCanvas.setHeight(img.height)
      exportCanvas.setWidth(img.width)
      scaleAndPositionImage(img)
    })

    fabric.Image.fromURL(signatureImg, (img) => {
      img.scaleToWidth(100)
      img.scaleToHeight(100)
      exportCanvas.add(img).renderAll()
    })
  }

  /** 縮放 */
  const scaleAndPositionImage = (bgImage) => {
    const canvasWidth = canvasRef.current.width
    const canvasHeight = canvasRef.current.height

    exportCanvas.setWidth(canvasWidth)
    exportCanvas.setHeight(canvasHeight)

    const canvasAspect = canvasWidth / canvasHeight
    const imgAspect = bgImage.width / bgImage.height
    let left, top, scaleFactor

    if (canvasAspect >= imgAspect) {
      scaleFactor = canvasWidth / bgImage.width
      left = 0
      top = -(bgImage.height * scaleFactor - canvasHeight) / 2
    } else {
      scaleFactor = canvasHeight / bgImage.height
      top = 0
      left = -(bgImage.width * scaleFactor - canvasWidth) / 2
    }

    exportCanvas.setBackgroundImage(
      bgImage,
      exportCanvas.renderAll.bind(exportCanvas),
      {
        top: top,
        left: left,
        originX: 'left',
        originY: 'top',
        scaleX: scaleFactor,
        scaleY: scaleFactor,
      }
    )
  }

  /** 下載 */
  const download = () => {
    const dataURL = exportCanvas.toDataURL({ format: 'png' })
    const link = document.createElement('a')
    link.download = 'my-image.png'
    link.href = dataURL
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    link.parentNode.removeChild(link)
  }

  useEffect(() => {
    const c = new fabric.Canvas(exportRef.current)

    setExportCanvas(c)
  }, [exportRef])

  return (
    <PdfWrapper>
      <input accept=".pdf" type="file" onChange={handlePdf} />
      <p>{message}</p>
      <button onClick={handleExport}>export</button>
      <button onClick={download}>download</button>
      <canvas style={{ display: 'none' }} ref={canvasRef} />
      <canvas ref={exportRef} />
    </PdfWrapper>
  )
}

const PdfWrapper = styled.div``
export default Pdf
