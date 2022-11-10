import React from 'react'
import styled from 'styled-components'

import dialog from '../../images/dialog01.png'

const TextBlock = () => {
  return (
    <TextBlockWrapper>
      <p className="q1">你是否也有以下困擾？</p>
      <p className="question q2">
        羨慕
        <span>別人的</span>
        酷酷網頁動畫？
      </p>
      <p className="question q3">
        <span>滿足不了</span>
        同事的許願？
      </p>
      <p className="question q4">
        動畫技能樹<span>太雜無從下手？</span>
      </p>
    </TextBlockWrapper>
  )
}

const TextBlockWrapper = styled.div`
  font-weight: bold;
  max-width: 800px;
  margin: 0 auto;
  height: 100vh;
  .q1 {
    color: #00ffa2;
    font-size: 24px;
    text-align: center;
    margin: 150px 0 200px;
    position: relative;
    :after {
      content: '';
      position: absolute;
      left: 50%;
      top: -50%;
      transform: translate(-50%);
      background-image: url(${dialog});
      width: 366px;
      height: 123px;
    }
  }
  .question {
    color: #fff;
    font-size: 50px;
    margin-top: 100px;
  }
  .q2 {
    text-align: center;
    span {
      font-size: 40px;
    }
  }
  .q3 {
    span {
      font-size: 30px;
    }
  }
  .q4 {
    text-align: right;
    span {
      font-size: 40px;
    }
  }
`

export default TextBlock
