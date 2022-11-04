import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
const Question = ({ qa, isFirst, isLast }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openHandler = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    setIsOpen(false)
  }, [qa])

  return (
    <QuestionWrapper
      className={isOpen && `active`}
      isFirst={isFirst}
      isLast={isLast}
      onClick={openHandler}
    >
      <div className="question">
        <p>Q：{qa.q}</p>
        <p className={`btn ${isOpen ? "active" : ""}`}>＋</p>
      </div>
      {isOpen && <p className="answer">A：{qa.a}</p>}
    </QuestionWrapper>
  )
}

const QuestionWrapper = styled.div`
  width: 100%;
  border: 1px solid #000;
  padding: 20px;
  margin: -1px 0 0 -1px;
  background:#F3F3F3;
  ${(props) => props.isFirst && `border-radius: 10px 10px 0 0;`}
  ${(props) => props.isLast && `border-radius: 0 0 10px 10px;`}
  cursor: pointer;

  .question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    line-height: 28px;

    .btn {
      font-size: 25px;
      font-weight: normal;
      transition: transform 0.5s;
      &.active {
        transform: rotate(135deg);
      }
    }
  }
  .answer {
    width: 90%;
    font-size: 16px;
    font-weight: normal;
    color: #848484;
    margin-top: 20px;
    line-height: 24px;
  }
`
export default Question
