import React, { useState, useRef, useEffect } from "react"
import { pdfjs } from "react-pdf"
import styled from "styled-components"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

const Pdf = () => {
  const [message, setMessage] = useState("")
  const canvasRef = useRef(null)
  const [canvas, setCanvas] = useState(null)
  const [ctx, setCtx] = useState(null)
  const UploadPdfHandler = (e) => {
    // 透過 input 所選取的檔案
    const file = e.target.files[0]
    if (file.type === "application/pdf") {
      // 判斷檔案大小
      if (file.size > 10000000) {
        setMessage("檔案超過10Mb")
        return
      }
      // 產生fileReader物件
      const fileReader = new FileReader()
      // 將資料做處理
      fileReader.readAsArrayBuffer(file)

      fileReader.addEventListener("load", () => {
        // 獲取readAsArrayBuffer產生的結果，並用來渲染PDF
        const pdfData = new Uint8Array(fileReader.result)
        const loadingTask = pdfjs.getDocument({ data: pdfData })
        loadingTask.promise.then(
          (pdf) => {
            const pageNumber = 1
            pdf.getPage(pageNumber).then((page) => {
              const scale = 1.5
              const viewport = page.getViewport({ scale: scale })

              canvas.height = viewport.height
              canvas.width = viewport.width
              const renderContext = {
                canvasContext: ctx,
                viewport: viewport,
              }
              page.render(renderContext)
            })
          },
          (reason) => {
            // PDF loading error
            console.error(reason)
          }
        )
      })
    } else {
      setMessage("請上傳pdf檔案")
    }
  }
  useEffect(() => {
    const c = canvasRef.current
    setCanvas(c)
    if (c) setCtx(c.getContext("2d"))
  }, [canvasRef])

  return (
    <PdfWrapper>
      <input accept=".pdf" type="file" onChange={UploadPdfHandler} />
      <p>{message}</p>
      <canvas ref={canvasRef} />
    </PdfWrapper>
  )
}

const PdfWrapper = styled.div``
export default Pdf
