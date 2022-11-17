import React, { useState } from 'react'
import styled from 'styled-components'
import { BiDownload } from 'react-icons/bi'
import jsPDF from 'jspdf'
import { MdOutlinePictureAsPdf } from 'react-icons/md'
import { RiFolderZipLine } from 'react-icons/ri'
import { FiShare2 } from 'react-icons/fi'

const Step3 = ({ fileName }) => {
  const [toolPopup, setToolPopup] = useState(false)
  const img = localStorage.getItem('img')
  const download = () => {
    const pdf = new jsPDF()
    // 設定背景在 PDF 中的位置及大小
    const width = pdf.internal.pageSize.width
    const height = pdf.internal.pageSize.height
    pdf.addImage(img, 'png', 0, 0, width, height)

    // 將檔案取名並下載
    pdf.save(`${fileName}.pdf`)
  }
  return (
    <Step3Wrapper>
      <TitleArea>
        <div className="title">{fileName}</div>
        <div className="step-control">
          <div className="download" onClick={() => setToolPopup(true)}>
            <BiDownload />
            下載
          </div>
          {toolPopup && (
            <>
              <div className="darkBg" onClick={() => setToolPopup(false)} />
              <div className="popup">
                <div onClick={download}>
                  <MdOutlinePictureAsPdf />
                  下載PDF檔
                </div>
                <div>
                  <RiFolderZipLine />
                  下載全部(.zip)
                </div>
                <div>
                  <FiShare2 />
                  分享線上連結
                </div>
              </div>
            </>
          )}
        </div>
      </TitleArea>
      <PdfArea>
        <img src={img} alt="" />
      </PdfArea>
    </Step3Wrapper>
  )
}
const Step3Wrapper = styled.div`
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
    position: relative;
    display: flex;
    > div {
      padding: 8px 20px;
      border-radius: 5px;
      cursor: pointer;
    }

    .download {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #696cff;
      border: 1px solid #696cff;
      :hover {
        color: #fff;
        background-color: #696cff;
      }
    }
    .popup {
      position: absolute;
      width: 200px;
      height: 128px;
      right: 0;
      top: 130%;
      background: #ffffff;
      box-shadow: 0px 2px 20px 2px rgba(105, 122, 141, 0.2);
      border-radius: 10px;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      > div {
        display: flex;
        align-items: center;
        :hover {
          color: #696cff;
        }
      }
      svg {
        margin-right: 10px;
      }
    }
    .darkBg {
      width: 100%;
      height: 100%;
      z-index: 1;
      position: fixed;
      left: 0;
      top: 0;
      cursor: pointer;
    }
  }
`

const PdfArea = styled.div`
  margin: 0 auto 0;
`
export default Step3
