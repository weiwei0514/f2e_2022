import React, { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const Sign = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [signatureImg, setSignatureImg] = useState(null)
  const [message, setMessage] = useState('')
  const [wrong, setWrong] = useState(false)
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState('')

  const steps = ['上傳檔案', '進行簽署', '預覽儲存']
  const step = {
    0: (
      <Step1
        setCurrentStep={setCurrentStep}
        setMessage={setMessage}
        setWrong={setWrong}
        setFile={setFile}
      />
    ),
    1: (
      <Step2
        file={file}
        fileName={fileName}
        setFileName={setFileName}
        signatureImg={signatureImg}
        setSignatureImg={setSignatureImg}
        setCurrentStep={setCurrentStep}
      />
    ),
    2: <Step3 />,
  }

  // 錯誤訊息
  useEffect(() => {
    if (!wrong) return
    setTimeout(() => {
      setWrong(false)
    }, 3000)
  }, [wrong])

  return (
    <SignWrapper>
      <Steps>
        {steps.map((v, i) => (
          <Fragment key={i}>
            <Step currentStep={currentStep} step={i}>
              <div className="num">{i + 1}</div>
              <p>{v}</p>
            </Step>
            {i !== 2 && <div className="bar" />}
          </Fragment>
        ))}
      </Steps>
      {step[currentStep]}
      <div className={`message ${wrong ? 'active' : ''}`}>
        <AiOutlineInfoCircle />
        {message}
      </div>
    </SignWrapper>
  )
}
const SignWrapper = styled.div`
  position: relative;
  height: 100%;
  .message {
    display: flex;
    align-items: center;
    position: absolute;
    width: 349px;
    height: 40px;
    padding: 10px;
    background: #ffe0db;
    border-radius: 5px;
    left: 50%;
    transform: translateX(-50%);
    color: #ff3e1d;
    opacity: 0;
    transition: opacity 1s ease;
    &.active {
      opacity: 1;
    }
    svg {
      font-size: 20px;
      margin-right: 10px;
    }
  }
`
const Step = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #252525;
  .num {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    background: ${(props) =>
      props.currentStep === props.step ? '#696CFF' : '#697a8d'};
    border-radius: 50%;
    color: #fff;
    margin-right: 10px;
  }
`
const Steps = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;

  .bar {
    width: 50px;
    height: 2px;
    background: #697a8d;
    margin: 0 20px;
  }
`
export default Sign
