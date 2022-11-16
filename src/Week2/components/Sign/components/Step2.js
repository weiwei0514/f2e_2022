import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { MdModeEditOutline } from 'react-icons/md'
import { pdfjs } from 'react-pdf'
import { fabric } from 'fabric'
import { TbSignature, TbArrowBackUp } from 'react-icons/tb'
import { BiCalendar } from 'react-icons/bi'
import { CgFormatText } from 'react-icons/cg'
import ReactModal from 'common/ReactModal'
import Signature from './Signature'
import { useCallback } from 'react'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`
const Base64Prefix = 'data:application/pdf;base64,'
const Step2 = ({
  file,
  setCurrentStep,
  setFileName,
  fileName,
  setSignatureImg,
  signatureImg,
}) => {
  const [isEdit, setIsEdit] = useState(false)
  const [signPopup, setSignPopup] = useState(false)
  const [canvas, setCanvas] = useState(null)
  const canvasRef = useRef(null)

  // 使用原生 FileReader 轉檔
  function readBlob(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.addEventListener('load', () => resolve(reader.result))
      reader.addEventListener('error', reject)
      reader.readAsDataURL(blob)
    })
  }

  const printPDF = useCallback(async (pdfData) => {
    // 將檔案處理成 base64
    pdfData = await readBlob(pdfData)

    // 將 base64 中的前綴刪去，並進行解碼
    const data = atob(pdfData.substring(Base64Prefix.length))

    // 利用解碼的檔案，載入 PDF 檔及第一頁
    const pdfDoc = await pdfjs.getDocument({ data }).promise
    const pdfPage = await pdfDoc.getPage(1)

    // 設定尺寸及產生 canvas
    const viewport = pdfPage.getViewport({ scale: window.devicePixelRatio })
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    // 設定 PDF 所要顯示的寬高及渲染
    canvas.height = viewport.height
    canvas.width = viewport.width
    const renderContext = {
      canvasContext: context,
      viewport,
    }
    const renderTask = pdfPage.render(renderContext)

    // 回傳做好的 PDF canvas
    return renderTask.promise.then(() => canvas)
  }, [])

  async function pdfToImage(pdfData) {
    // 設定 PDF 轉為圖片時的比例
    const scale = 1 / window.devicePixelRatio

    // 回傳圖片
    return new fabric.Image(pdfData, {
      id: 'renderPDF',
      scaleX: scale,
      scaleY: scale,
    })
  }

  /** 填上背景檔案 */
  useEffect(() => {
    const c = new fabric.Canvas(canvasRef.current)
    if (file) {
      async function setBg() {
        c.requestRenderAll()
        const pdfData = await printPDF(file)
        const pdfImage = await pdfToImage(pdfData)

        // 透過比例設定 canvas 尺寸
        c.setWidth(pdfImage.width / window.devicePixelRatio)
        c.setHeight(pdfImage.height / window.devicePixelRatio)

        // 將 PDF 畫面設定為背景
        c.setBackgroundImage(pdfImage, c.renderAll.bind(c))

        setCanvas(c)
      }
      setBg()
    }
  }, [file, printPDF])

  /** 加上簽名 */
  useEffect(() => {
    if (canvas && signatureImg) {
      fabric.Image.fromURL(signatureImg, function (image) {
        // 設定簽名出現的位置及大小，後續可調整
        image.top = 100
        image.scaleX = 0.5
        image.scaleY = 0.5
        canvas.add(image)
      })
    }
  }, [canvas, signatureImg])

  useEffect(() => {
    if (!file) return
    setFileName(file.name.split('.pdf')[0])
  }, [file, setFileName])

  return (
    <Step2Wrapper>
      <TitleArea>
        <div className="title">
          {isEdit ? (
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
          ) : (
            fileName
          )}
          <MdModeEditOutline onClick={() => setIsEdit(!isEdit)} />
        </div>
        <div className="step-control">
          <div className="cancel" onClick={() => setCurrentStep(0)}>
            取消
          </div>
          <div className="next">下一步</div>
        </div>
      </TitleArea>
      <PdfArea>
        <canvas ref={canvasRef} />
      </PdfArea>
      <Toolbar>
        <div onClick={() => setSignPopup(true)}>
          <TbSignature />
          簽名
        </div>
        <div>
          <BiCalendar />
          日期
        </div>
        <div>
          <CgFormatText />
          文字
        </div>
        <div>
          <TbArrowBackUp />
          返回
        </div>
      </Toolbar>
      <ReactModal isOpen={signPopup} onModalClose={() => setSignPopup(false)}>
        <Signature
          onModalClose={() => setSignPopup(false)}
          setSignatureImg={setSignatureImg}
        />
      </ReactModal>
    </Step2Wrapper>
  )
}
const Step2Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const TitleArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  .title {
    display: flex;
    align-items: center;
    font-size: 18px;
    svg {
      color: #696cff;
      cursor: pointer;
      margin-left: 10px;
    }
  }
  .step-control {
    display: flex;
    > div {
      padding: 8px 20px;
      border-radius: 5px;
      cursor: pointer;
    }
    .cancel {
      color: #697a8d;
      border: 1px solid #697a8d;
      margin-right: 10px;
      :hover {
        color: #fff;
        background-color: #697a8d;
      }
    }
    .next {
      color: #696cff;
      border: 1px solid #696cff;
      :hover {
        color: #fff;
        background-color: #696cff;
      }
    }
  }
`

const PdfArea = styled.div`
  flex: 1 1 0;
  text-align: center;
  margin: 0 auto 0;
  overflow-y: overlay;
`

const Toolbar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 245px;
  background: #697a8d;
  box-shadow: 0px 2px 10px rgba(105, 108, 255, 0.3);
  border-radius: 10px;
  right: 0;
  top: 20%;
  padding: 5px;
  > div {
    color: #fff;
    height: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      font-size: 26px;
      margin-bottom: 3px;
    }
    &:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }
  }
`
export default Step2
