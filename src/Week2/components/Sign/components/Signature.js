import React, { useEffect, useRef, useState, useCallback } from "react"
import styled from "styled-components"
const colorMap = {
  black: "#000",
  blue: "#1b7ced",
  red: "#ff0000",
}
const Signature = ({ onModalClose, setSignatureImg }) => {
  const [isPainting, setIsPainting] = useState(false)
  const [strokeColor, setStrokeColor] = useState("black")
  const canvasRef = useRef(null)
  const ctxRef = useRef(null)
  // 開始繪圖時，將狀態開啟
  const startPosition = useCallback((e) => {
    e.preventDefault()
    setIsPainting(true)
    ctxRef.current.beginPath()
  }, [])

  // 結束繪圖時，將狀態關閉，並產生新路徑
  const finishedPosition = () => {
    setIsPainting(false)
  }

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
    onModalClose()
  }

  const handleStrokeColor = (value) => {
    ctxRef.current.strokeStyle = colorMap[value]
    setStrokeColor(value)
  }

  // 畫布初始化
  useEffect(() => {
    const canvas = canvasRef.current

    canvas.width = 540
    canvas.height = 296
    canvas.style.width = `540px`
    canvas.style.height = "296px"
    canvas.style.background = "#F5F5F9"
    canvas.style.borderRadius = "10px"
    canvas.style.cursor = "pointer"

    const context = canvas.getContext("2d")

    context.strokeStyle = colorMap.block
    context.lineWidth = 2
    context.lineCap = "round"

    ctxRef.current = context
  }, [])

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
  }, [draw, startPosition])

  return (
    <SignatureWrapper>
      <Header>
        <h2>新增簽名</h2>
        <div className="options">
          <p>簽名</p>
          <p>圖片</p>
          <p>文字</p>
        </div>
        <div className="close-btn" onClick={onModalClose}>
          ＋
        </div>
      </Header>
      <WriteArea>
        <canvas ref={canvasRef} />
        <div className="control">
          <p onClick={resetCanvas}>清除</p>
          <div className="btn" onClick={saveImage}>
            使用
          </div>
        </div>
        <div className="color-group">
          {Object.entries(colorMap).map(([key, value]) => (
            <div
              key={key}
              className={`circle ${key === strokeColor ? "active" : ""}`}
              style={{ backgroundColor: value }}
              onClick={() => handleStrokeColor(key)}
            />
          ))}
        </div>
      </WriteArea>
    </SignatureWrapper>
  )
}

const SignatureWrapper = styled.div`
  width: 600px;
  height: 500px;
  background: #fff;
  border-radius: 10px;
  z-index: 2;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px 0;
  width: 100%;
  height: 100px;
  box-shadow: 0px 4px 4px rgba(217, 217, 217, 0.2);
  border-radius: 10px 10px 0px 0px;
  h2 {
    font-size: 22px;
  }
  .options {
    display: flex;
    justify-content: space-between;
    width: 45%;
    color: #697a8d;
    font-size: 16px;
    > p {
      padding-bottom: 8px;
      cursor: pointer;
      &:first-child {
        color: #252525;
        border-bottom: 2px solid #696cff;
      }
    }
  }
  .close-btn {
    position: absolute;
    right: 30px;
    top: 15px;
    font-size: 30px;
    color: #697a8d;
    transform: rotate(45deg);
    cursor: pointer;
  }
`

const WriteArea = styled.div`
  position: relative;
  height: 100%;
  padding: 28px 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      color: #696cff;
      cursor: pointer;
    }
    .btn {
      color: #fff;
      padding: 10px 20px;
      background: #696cff;
      border-radius: 5px;
      cursor: pointer;
    }
  }
  .color-group {
    position: absolute;
    right: 25px;
    padding: 10px;
    display: flex;
    .circle {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      margin-right: 10px;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
      &.active {
        ::after {
          content: "✓";
          color: #fff;
          font-size: 12px;
          margin-left: 4px;
        }
      }
    }
  }
`
export default Signature
