import React from "react"
import styled from "styled-components"
const CheckBox = ({ fileName, setCurrentStep, onModalClose, saveToImg }) => {
  const checkHandler = () => {
    saveToImg()
    setCurrentStep(2)
    onModalClose()
  }
  return (
    <CheckBoxWrapper>
      <h2>自己簽署完成</h2>
      <p>您的檔案「{fileName}」確認文件創建？</p>
      <div className="control">
        <div className="cancel" onClick={onModalClose}>
          取消
        </div>
        <div className="next" onClick={checkHandler}>
          確認
        </div>
      </div>
    </CheckBoxWrapper>
  )
}
const CheckBoxWrapper = styled.div`
  width: 442px;
  height: 190px;
  background: #fff;
  border-radius: 10px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  padding: 20px;
  h2 {
    font-size: 22px;
    text-align: center;
  }
  p {
    text-align: center;
  }
  .control {
    display: flex;
    justify-content: center;
    > div {
      padding: 8px 20px;
      border-radius: 5px;
      cursor: pointer;
    }
    .cancel {
      color: #697a8d;
      border: 1px solid #697a8d;
      margin-right: 10px;
    }
    .next {
      color: #fff;
      background-color: #696cff;
    }
  }
`
export default CheckBox
