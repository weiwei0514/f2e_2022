import React, { useState } from "react"
import styled from "styled-components"
import bg from "Week1/images/faq_bg.png"
import { QAList } from "./doc"
import media from "lib/mediaQuery"
//component
import Option from "./Option"
import Question from "./Question"
const QA = () => {
  const [option, setOption] = useState(0)
  const optionsHandler = (option) => {
    setOption(option)
  }
  return (
    <QAWrapper>
      <QAContainer>
        <div className="options">
          {Object.values(QAList).map((v, k) => (
            <Option
              key={k}
              title={v.title}
              num={k}
              optionsHandler={optionsHandler}
              option={option}
            />
          ))}
        </div>
        <div className="qa">
          {Object.values(QAList)[option]["qa"].map((v, k) => (
            <Question
              key={k}
              qa={v}
              isFirst={k === 0}
              isLast={k === Object.values(QAList)[option]["qa"].length - 1}
            />
          ))}
        </div>
      </QAContainer>
    </QAWrapper>
  )
}
const QAWrapper = styled.div`
  width: 100%;
  background: url(${bg});
  padding: 100px 0;
  position: relative;
`
const QAContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  ${media.tablet`
    flex-direction: column;
  `}
  ${media.mobile`
    flex-direction: column;
  `}
  .options {
    display: flex;
    flex-direction: column;
    ${media.tablet`
    width:100%;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content:space-around;
  `}
  ${media.mobile`
    width:100%;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content:space-around;
  `}
    p {
      display: flex;
      align-items: center;
      font-size: 18px;
      margin-bottom: 50px;
      cursor: pointer;
      img {
        margin-right: 10px;
      }
      &.active {
        font-weight: bold;
        color: #31cf84;
      }
    }
  }
  .qa {
    width: 75%;
    ${media.tablet`
      width: 100%;
    `}
    ${media.mobile`
      width: 100%;
    `}
  }
`
export default QA
