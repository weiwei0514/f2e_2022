import React, { useEffect, useRef, useState, useCallback } from "react"
import styled from "styled-components"
import { useWindowDimensions } from "../useHooks"

const Signature = () => {
  const [isPainting, setIsPainting] = useState(false)
  const [signatureImg, setSignatureImg] = useState("")
  const [color, setColor] = useState("#000")
  const wrapperRef = useRef(null)
  const canvasRef = useRef(null)
  const ctxRef = useRef(null)
  const windowWidth = useWindowDimensions().width
  // 開始繪圖時，將狀態開啟
  const startPosition = (e) => {
    e.preventDefault()
    setIsPainting(true)
  }

  // 結束繪圖時，將狀態關閉，並產生新路徑
  const finishedPosition = useCallback(() => {
    setIsPainting(false)
    ctxRef.current.beginPath()
  }, [])

  // 取得滑鼠 / 手指在畫布上的位置
  const getPaintPosition = useCallback((e) => {
    const canvasSize = canvasRef.current.getBoundingClientRect()
    if (e.type === "mousemove") {
      return {
        x: e.clientX - canvasSize.left,
        y: e.clientY - canvasSize.top,
      }
    } else {
      return {
        x: e.touches[0].clientX - canvasSize.left,
        y: e.touches[0].clientY - canvasSize.top,
      }
    }
  }, [])

  // 繪圖過程
  const draw = useCallback(
    (e) => {
      // 滑鼠移動過程中，若非繪圖狀態，則跳出
      if (!isPainting) return

      // 取得滑鼠 / 手指在畫布上的 x, y 軸位置位置
      const paintPosition = getPaintPosition(e)

      // 移動滑鼠位置並產生圖案
      ctxRef.current.lineTo(paintPosition.x, paintPosition.y)
      ctxRef.current.stroke()
    },
    [getPaintPosition, isPainting]
  )
  // 重新設定畫布
  const resetCanvas = () => {
    ctxRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    )
  }

  // 產生簽名圖檔
  const saveImage = () => {
    // 圖片儲存的類型選擇 png ，並將值放入 img 的 src
    const newImg = canvasRef.current.toDataURL("image/png")
    setSignatureImg(newImg)
    localStorage.setItem("img", newImg)
  }

  // 畫布設定
  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = wrapperRef.current.clientWidth
    canvas.height = 300
    canvas.style.width = `${wrapperRef.current.clientWidth}px`
    canvas.style.height = "300px"

    const ctx = canvas.getContext("2d")
    ctx.lineWidth = 2
    ctx.lineCap = "round"
    ctx.strokeStyle = color
    ctxRef.current = ctx
  }, [windowWidth,color])

  useEffect(() => {
    const canvas = canvasRef.current
    // event listener 電腦板
    canvas.addEventListener("mousedown", startPosition)
    canvas.addEventListener("mouseup", finishedPosition)
    canvas.addEventListener("mouseleave", finishedPosition)
    canvas.addEventListener("mousemove", draw)
    // event listener 手機板
    canvas.addEventListener("touchstart", startPosition)
    canvas.addEventListener("touchend", finishedPosition)
    canvas.addEventListener("touchcancel", finishedPosition)
    canvas.addEventListener("touchmove", draw)
    return () => {
      // event listener 電腦板
      canvas.removeEventListener("mousedown", startPosition)
      canvas.removeEventListener("mouseup", finishedPosition)
      canvas.removeEventListener("mouseleave", finishedPosition)
      canvas.removeEventListener("mousemove", draw)
      // event listener 手機板
      canvas.removeEventListener("touchstart", startPosition)
      canvas.removeEventListener("touchend", finishedPosition)
      canvas.removeEventListener("touchcancel", finishedPosition)
      canvas.removeEventListener("touchmove", draw)
    }
  }, [draw, finishedPosition])

  return (
    <SignatureWrapper ref={wrapperRef}>
      <canvas ref={canvasRef} />
      <div className="color-group">
        <div className="circle" style={{backgroundColor:"#000"}} onClick={(e)=>setColor(e.target.style.backgroundColor)}/>
        <div className="circle" style={{backgroundColor:"#1b7ced"}} onClick={(e)=>setColor(e.target.style.backgroundColor)}/>
        <div className="circle" style={{backgroundColor:"#ff0000"}} onClick={(e)=>setColor(e.target.style.backgroundColor)}/>
      </div>
      <div className="btn-group">
        <button className="clear" onClick={resetCanvas}>
          Clear
        </button>
        <button className="save" onClick={saveImage}>
          Save
        </button>
      </div>
      <img alt="" src={signatureImg} />
    </SignatureWrapper>
  )
}
const SignatureWrapper = styled.div`
  width: 100%;
  canvas {
    border: 1px solid #000;
  }
  .btn-group {
  }
  .color-group{
    padding:10px;
    display:flex;
    .circle{
      width:30px;
      height:30px;
      border-radius:50%;
      margin-right:10px;
      cursor:pointer;
      &:hover{
        opacity:.7;
      }
    }
    .black{
      background-color:#000;
    }
    .blue{
      background-color:#1b7ced;
    }
    .red{
      background-color:#ff0000;
    }
  }
`
export default Signature
