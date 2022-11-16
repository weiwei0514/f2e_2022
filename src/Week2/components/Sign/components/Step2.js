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
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

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
  const canvasRef = useRef(null)
  const exportRef = useRef(null)
  const pdfLoader = (file) => {
    const fileReader = new FileReader()

    fileReader.onload = function () {
      const pdfData = new Uint8Array(this.result)
      const loadingTask = pdfjs.getDocument({ data: pdfData })

      loadingTask.promise.then(
        (pdf) => {
          const pageNumber = 1

          pdf.getPage(pageNumber).then((page) => {
            const scale = 1.5
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
  }
  useEffect(() => {
    if (!file) return
    pdfLoader(file)
    setFileName(file.name.split('.pdf')[0])
  }, [file])
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
