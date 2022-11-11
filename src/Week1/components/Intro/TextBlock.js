import React from 'react'
import styled from 'styled-components'
import media from 'lib/mediaQuery'
import dialog from '../../images/dialog01.png'
import face01 from '../../images/face_01.png'
import face02 from '../../images/face_02.png'
import sun from '../../images/sun_01.png'

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
      <img className="face face01" src={face01} alt="" />
      <img className="face face02" src={face02} alt="" />
    </TextBlockWrapper>
  )
}

const TextBlockWrapper = styled.div`
  position: relative;
  font-weight: bold;
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  height: 100vh;
  ::after {
    content: '';
    position: absolute;
    background: url(${sun}) no-repeat;
    background-size: contain;
    width: 30%;
    max-width: 296px;
    height: 100%;
    top: 10%;
    left: -20%;
  }
  .face {
    position: absolute;
    &.face01 {
      width: 20%;
      max-width: 117px;
      right: 0;
      top: 10%;
    }
    &.face02 {
      width: 15%;
      max-width: 92px;
    }
  }
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
    ${media.mobile`
        font-size: 30px;
      `}
  }
  .q2 {
    text-align: center;
    span {
      font-size: 40px;
      ${media.mobile`
        font-size: 20px;
      `}
    }
  }
  .q3 {
    span {
      font-size: 30px;
      ${media.mobile`
        font-size: 16px;
      `}
    }
  }
  .q4 {
    text-align: right;
    span {
      font-size: 40px;
      ${media.mobile`
        font-size: 20px;
      `}
    }
  }
`

export default TextBlock
