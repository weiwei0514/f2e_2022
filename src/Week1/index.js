import React from 'react'
import styled from 'styled-components'
import bgNoise from './images/bg-noise.jpg'

//components
import Home from './components/Home'
import Sponsor from './components/Sponsor'

const Week1 = () => {
  return (
    <Week1Wrapper>
      <Home />
      <Sponsor />
    </Week1Wrapper>
  )
}

const Week1Wrapper = styled.div`
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
