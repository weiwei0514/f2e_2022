import React from "react"
import styled from "styled-components"
import upload from "Week2/images/upload.png"
import { FileUploader } from "react-drag-drop-files"

const Step1 = ({ setCurrentStep, setMessage, setWrong, setFile }) => {
  const handlePdf = (file) => {
    if (file.type === "application/pdf") {
      // 判斷檔案大小
      if (file.size > 10000000) {
        setMessage("檔案超過10MB，請重新選擇")
        setWrong(true)
        return
      }
      console.log(file)
      setFile(file)
      setCurrentStep(1)
    } else {
      setMessage("檔案格式錯誤，請重新選擇")
      setWrong(true)
    }
  }

  const fileUploaderSetting = {
    handleChange: handlePdf,
    name: "file",
    hoverTitle: "拖曳至此",
    children:<div className="upload-btn">選擇檔案</div>,
    classes: "drop_area",
  }
  return (
    <Step1Wrapper>
      <h1>請由此處上傳簽署檔案</h1>
      <img src={upload} alt="" />
      <FileUploader {...fileUploaderSetting} />
      <h2>或直接拖放檔案進來</h2>
    </Step1Wrapper>
  )
}
const Step1Wrapper = styled.div`
  position: relative;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  box-shadow: 0px 2px 6px rgba(105, 122, 141, 0.1);
  border-radius: 10px;
  margin-bottom: 25px;
  h1 {
    margin-top: 40px;
    font-size: 26px;
    color: #252525;
  }
  h2 {
    font-size: 18px;
    font-weight: normal;
    color: #697a8d;
  }
  img {
    height: 50%;
    max-height: 300px;
    margin: 75px 0;
  }
  .drop_area {


  }
  .upload-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 32px;
    border: 1px solid #696cff;
    background: #fff;
    border-radius: 5px;
    color: #696cff;
    margin-bottom: 20px;
    cursor: pointer;
    :hover {
      background: #696cff;
      color: #fff;
    }
  }
`
export default Step1
