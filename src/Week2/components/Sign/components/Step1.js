import React, { useRef } from "react"
import styled from "styled-components"
import upload from "Week2/images/upload.png"

const Step1 = ({setCurrentStep,setSignatureImg,setMessage,setWrong}) => {
  const fileRef = useRef(null)
  const handlePdf = (e) => {
    const file = e.target.files[0]
    if (file.type === "application/pdf") {
      // 判斷檔案大小
      if (file.size > 10000000) {
        setMessage("檔案超過10MB，請重新選擇")
        setWrong(true)
        return
      }
      // const fileReader = new FileReader()

      // fileReader.onload = function () {
      //   const pdfData = new Uint8Array(this.result)
      //   const loadingTask = pdfjs.getDocument({ data: pdfData })

      //   loadingTask.promise.then(
      //     (pdf) => {
      //       const pageNumber = 1

      //       pdf.getPage(pageNumber).then((page) => {
      //         const scale = 1
      //         const viewport = page.getViewport({ scale })

      //         canvasRef.current.height = viewport.height
      //         canvasRef.current.width = viewport.width

      //         const renderContext = {
      //           viewport,
      //           canvasContext: canvasRef.current.getContext("2d"),
      //         }

      //         const renderTask = page.render(renderContext)

      //         renderTask.promise.then(() => {
      //           console.log("Page rendered")
      //         })
      //       })
      //     },
      //     (reason) => console.error(reason)
      //   )
      // }

      // fileReader.readAsArrayBuffer(file)
    } else {
      setMessage("檔案格式錯誤，請重新選擇")
        setWrong(true)
    }
  }
  return (
    <Step1Wrapper>
      <h1>請由此處上傳簽署檔案</h1>
      <img src={upload} alt="" />
      <div className="upload-btn">
        <input
          ref={fileRef}
          onChange={handlePdf}
          accept=".pdf"
          id="file"
          type="file"
          style={{ display: "none" }}
        />
        <button onClick={() => fileRef.current.click()}>選擇檔案</button>
      </div>
      <h2>或直接拖放檔案進來</h2>
    </Step1Wrapper>
  )
}
const Step1Wrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  box-shadow: 0px 2px 6px rgba(105, 122, 141, 0.1);
  border-radius: 10px;
  padding: 40px;
  h1 {
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
  .upload-btn {
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 120px;
      height: 32px;
      border: 1px solid #696cff;
      background: #fff;
      border-radius: 5px;
      font-size: 16px;
      color: #696cff;
      cursor: pointer;
      :hover {
        background: #696cff;
        color: #fff;
      }
    }
    margin-bottom: 20px;
  }
`
export default Step1
