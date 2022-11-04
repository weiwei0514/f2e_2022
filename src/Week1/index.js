import React from "react"
import styled from "styled-components"
import bgNoise from "./images/bg-noise.jpg"

//components
import Home from "./components/Home"
import Sponsor from "./components/Sponsor"
import QA from "./components/QA"
const Week1 = () => {
  return (
    <Week1Wrapper>
      <Home />
      <QA />
      <Sponsor />
      <Shadow />
    </Week1Wrapper>
  )
}
const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 200px;
  background: #000;
  bottom: -200px;
  box-shadow: 0 -100px 150px #000;
`

const Week1Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url(${bgNoise});
  background-size: 100px;
  animation: noise 0.6s steps(10) infinite;
  @keyframes noise {
    0% {
      background-position: 0 0;
    }

    100% {
      background-position: 400px 400px;
    }
  }
`
export default Week1
