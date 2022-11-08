import React, { useCallback, useRef } from "react"
import { loadFull } from "tsparticles"
import styled from "styled-components"
import ground from "../../images/ground.png"
import ball from "../../images/ball.png"
import arrowDown from "../../images/arrow_down.png"
import Particles from "react-particles"
import media from "lib/mediaQuery"
import { particlesProps } from "./doc"

const Home = () => {
  const homeRef = useRef(null)
  const particlesInit = useCallback(async (engine) => {
    console.log(engine)
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback((container) => {
    console.log(container)
  }, [])

  return (
    <HomeWrapper ref={homeRef}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesProps}
      />
      <Ball>
        <div className="title">
          <div className="primary">
            <p className="lower">The F2E 5th</p>
            <p className="upper">The F2E 5th</p>
          </div>
          <div className="secondary">
            <p>互動式網頁設計</p>
          </div>
        </div>
      </Ball>
      <ScrollDown>
        <img alt="arrow" src={arrowDown} />
        <p>scroll down</p>
      </ScrollDown>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${ground}) no-repeat;
  background-position: center bottom;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.tablet`
    background-size: initial;
    background-position: center 80vh;
  `}
  ${media.mobile`
    background-position: center 65vh;
  `}
`
const Ball = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  max-height: 747px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${ball}) no-repeat;
    background-position: center;
    background-size: contain;
  }
  .title {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .primary {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "GenosBold";
      font-size: 120px;
      ${media.tablet`
        font-size: 100px;
      `}
      ${media.mobile`
        font-size: 60px;
      `}
      p {
        &.upper {
          color: #fff;
          position: absolute;
        }
        &.lower {
          margin: 10px 0 0 10px;
          color: transparent;
          -webkit-text-stroke: 1px #00ffa2;
          ${media.mobile`
          margin: 5px 0 0 5px;
          `}
        }
      }
    }
    .secondary {
      margin-top: 60px;
      ${media.mobile`
      margin-top: 40px;
      `}
      p {
        font-size: 36px;
        font-weight: bold;
        color: #fff;
      }
    }
  }
`

const ScrollDown = styled.div`
  position: absolute;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    margin-bottom: 10px;
    animation: float 2s ease-in-out infinite;
    @keyframes float {
      from {
        transform: translateY(0%);
      }
      50% {
        transform: translateY(-50%);
      }
      to {
        transform: translateY(0%);
      }
    }
  }
  p {
    font-family: "GenosBold";
    font-size: 30px;
    color: #00ffa2;
  }
`
export default Home
