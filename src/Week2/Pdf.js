import React, { useState, useRef, useEffect } from "react"
import { pdfjs } from "react-pdf"
import styled from "styled-components"
import { fabric } from "fabric"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

const Pdf = () => {
  const [message, setMessage] = useState("")
  const canvasRef = useRef(null)
  const imgUrl = localStorage.getItem("img")
  const canvas = new fabric.Canvas("canvas")
  // canvasRef.current = canvas
  const pdfToCanvas = async (e) => {
    // 透過 input 所選取的檔案
    const file = e.target.files[0]
    const Base64Prefix = "data:application/pdf;base64,"

    if (file.type === "application/pdf") {
      // 判斷檔案大小
      if (file.size > 10000000) {
        setMessage("檔案超過10Mb")
        return
      }
      // 使用原生 FileReader 轉檔
      const readBlob = (blob) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.addEventListener("load", () => resolve(reader.result))
          reader.addEventListener("error", reject)
          reader.readAsDataURL(blob)
        })
      }

      const printPDF = async (pdfData) => {
        // 將檔案處理成 base64
        pdfData = await readBlob(pdfData)

        // 將 base64 中的前綴刪去，並進行解碼
        const data = window.atob(pdfData.substring(Base64Prefix.length))

        // 利用解碼的檔案，載入 PDF 檔及第一頁
        const pdfDoc = await pdfjs.getDocument({ data }).promise
        const pdfPage = await pdfDoc.getPage(1)

        // 設定尺寸及產生 canvas
        const viewport = pdfPage.getViewport({ scale: window.devicePixelRatio })
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")

        // 設定 PDF 所要顯示的寬高及渲染
        canvas.height = viewport.height
        canvas.width = viewport.width
        const renderContext = {
          canvasContext: ctx,
          viewport,
        }
        const renderTask = pdfPage.render(renderContext)

        // 回傳做好的 PDF canvas
        return renderTask.promise.then(() => canvas)
      }

      const pdfToImage = async (pdfData) => {
        // 設定 PDF 轉為圖片時的比例
        const scale = 1 / window.devicePixelRatio

        // 回傳圖片
        return new fabric.Image(pdfData, {
          id: "renderPDF",
          scaleX: scale,
          scaleY: scale,
        })
      }

      canvas.requestRenderAll()
      const pdfData = await printPDF(file)
      const pdfImage = await pdfToImage(pdfData)
      // 透過比例設定 canvas 尺寸
      canvas.setWidth(pdfImage.width / window.devicePixelRatio)
      canvas.setHeight(pdfImage.height / window.devicePixelRatio)
      // 將 PDF 畫面設定為背景
      canvas.setBackgroundImage(pdfImage, canvas.renderAll.bind(canvas))
    } else {
      setMessage("請上傳pdf檔案")
    }
  }
  const addImg = () => {
    fabric.Image.fromURL(imgUrl, (image) => {
      // 設定簽名出現的位置及大小，後續可調整
      image.top = 400
      image.scaleX = 0.5
      image.scaleY = 0.5
      canvas.add(image)
    })
  }
  return (
    <PdfWrapper>
      <input accept=".pdf" type="file" onChange={pdfToCanvas} />
      <p>{message}</p>
      <button onClick={addImg}>
        AddImg
      </button>
      <canvas ref={canvasRef} />
    </PdfWrapper>
  )
}

const PdfWrapper = styled.div``
export default Pdf
