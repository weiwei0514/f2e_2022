import React, { useEffect, useRef, useState, useCallback } from "react"
import styled from "styled-components"
import { useTitle } from "../useHooks"

const Week2 = ({ title }) => {
  useTitle(title)
  const [isPainting, setIsPainting] = useState(false)
  const [signatureImg, setSignatureImg] = useState("")
  const canvasRef = useRef(null)
  const ctx = canvasRef.current && canvasRef.current.getContext("2d")

  // 開始繪圖時，將狀態開啟
  const startPosition = (e) => {
    e.preventDefault()
    setIsPainting(true)
  }

  // 結束繪圖時，將狀態關閉，並產生新路徑
  const finishedPosition = useCallback(() => {
    setIsPainting(false)
    ctx.beginPath()
  }, [ctx])

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
      ctx.lineTo(paintPosition.x, paintPosition.y)
      ctx.stroke()
    },
    [getPaintPosition, ctx, isPainting]
  )
  // 重新設定畫布
  const resetCanvas = () => {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
  }

  // 產生簽名圖檔
  const saveImage = () => {
    // 圖片儲存的類型選擇 png ，並將值放入 img 的 src
    const newImg = canvasRef.current.toDataURL("image/png")
    setSignatureImg(newImg)
    localStorage.setItem("img", newImg)
  }
  useEffect(() => {
    const canvasControl = canvasRef.current
    // event listener 電腦板
    canvasControl.addEventListener("mousedown", startPosition)
    canvasControl.addEventListener("mouseup", finishedPosition)
    canvasControl.addEventListener("mouseleave", finishedPosition)
    canvasControl.addEventListener("mousemove", draw)
    // event listener 手機板
    canvasControl.addEventListener("touchstart", startPosition)
    canvasControl.addEventListener("touchend", finishedPosition)
    canvasControl.addEventListener("touchcancel", finishedPosition)
    canvasControl.addEventListener("touchmove", draw)
    return () => {
      // event listener 電腦板
      canvasControl.removeEventListener("mousedown", startPosition)
      canvasControl.removeEventListener("mouseup", finishedPosition)
      canvasControl.removeEventListener("mouseleave", finishedPosition)
      canvasControl.removeEventListener("mousemove", draw)
      // event listener 手機板
      canvasControl.removeEventListener("touchstart", startPosition)
      canvasControl.removeEventListener("touchend", finishedPosition)
      canvasControl.removeEventListener("touchcancel", finishedPosition)
      canvasControl.removeEventListener("touchmove", draw)
    }
  }, [draw, finishedPosition])

  // 設定線條的相關數值
  useEffect(() => {
    if (ctx) {
      ctx.lineWidth = 2
      ctx.lineCap = "round"
    }
  }, [ctx])

  return (
    <Week2Wrapper>
      <canvas ref={canvasRef} />
      <div className="btn-group">
        <button className="clear" onClick={resetCanvas}>
          Clear
        </button>
        <button className="save" onClick={saveImage}>
          Save
        </button>
      </div>
      <img alt="" src={signatureImg} />
    </Week2Wrapper>
  )
}
const Week2Wrapper = styled.div`
  canvas {
    width: 500px;
    height: 300px;
    border: 1px solid #000;
    @media only screen and (max-width: 600px) {
      width: 100%;
      height: 300px;
    }
  }
  .btn-group {
  }
`
export default Week2
