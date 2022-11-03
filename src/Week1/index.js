import React from "react"
import styled from "styled-components"
import bgNoise from "./images/bg-noise.jpg"

//components
import Home from "./components/Home"
const Week1 = () => {
  return <Week1Wrapper><Home/></Week1Wrapper>
}

const Week1Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${bgNoise});
  background-size: 100px 100px;
  animation: noise .6s steps(10) infinite;
  @keyframes noise {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 200px 200px;
  }
}
`
export default Week1
