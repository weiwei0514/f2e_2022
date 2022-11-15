import React, { useCallback } from 'react'
import { useWindowDimensions } from 'useHooks'
import { loadFull } from 'tsparticles'
import styled from 'styled-components'
import ground from '../../images/ground.png'
import ball from '../../images/ball.png'
import arrowDown from '../../images/arrow_down.png'
import Particles from 'react-particles'
import media from 'lib/mediaQuery'
import { particlesProps } from './doc'
import gr_light from '../../images/gr_light.png'
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse'
import { PC_BREAKPOINT_WIDTH } from 'config/breakpoint'

const Home = () => {
  const windowWidth = useWindowDimensions().width
  const isPC = windowWidth >= PC_BREAKPOINT_WIDTH

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <HomeWrapper>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesProps}
      />
      {isPC && (
        <div className="light">
          <MouseParallaxContainer
            containerStyle={{ height: '100%', width: '100%' }}
            globalFactorX={0.1}
            globalFactorY={0.1}
          >
            <MouseParallaxChild
              style={{ position: 'absolute', top: '-150px', right: '-150px' }}
              factorX={-0.3}
              factorY={-0.5}
            >
              <img src={gr_light} alt="" />
            </MouseParallaxChild>
            <MouseParallaxChild
              style={{
                position: 'absolute',
                left: '-100px',
                bottom: '-100px',
              }}
              factorX={0.3}
              factorY={0.5}
            >
              <img className="left-light" src={gr_light} alt="" />
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
      )}
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
  .light {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 9;
    .left-light {
      width: 300px;
      height: 350px;
    }
  }
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
    content: '';
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
      font-family: 'GenosBold';
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
    font-family: 'GenosBold';
    font-size: 30px;
    color: #00ffa2;
  }
`
export default Home
