import React from 'react'
import styled from 'styled-components'
import Marquee from 'react-fast-marquee'
import media from 'lib/mediaQuery'
import { ReactComponent as Line1 } from '../../images/step_road_01.svg'
import { ReactComponent as Line2 } from '../../images/step_road_02.svg'
import Step1Img from '../../images/step01_hand.png'
import Step2Img from '../../images/step02_roll.png'
import Step3Img from '../../images/step03_box.png'
import Step1Decoration from '../../images/step01_2star.png'
import Step2Decoration from '../../images/step02_line.png'
import Step3Decoration from '../../images/step03_star.png'
import { useGetStepsTop, useWindowDimensions } from 'useHooks'
import { stepsList, marqueeText, marqueeSetting } from './doc'
import { PC_BREAKPOINT_WIDTH } from 'config/breakpoint'

const Steps = () => {
  const top = useGetStepsTop()
  const windowWidth = useWindowDimensions().width
  const isPC = windowWidth >= PC_BREAKPOINT_WIDTH

  return (
    <StepsWrapper id="step">
      <div className="marquee-container">
        <Marquee {...marqueeSetting}>
          {Array.from({ length: 10 }, (v, i) => (
            <p key={i}>{marqueeText}&nbsp;</p>
          ))}
        </Marquee>
      </div>
      <StepsContainer>
        {stepsList.map((v, i) => (
          <Step
            key={i}
            className={`step${i + 1} ${top > v.showTop ? 'active' : ''}`}
            num={i + 1}
            top={top}
          >
            <p className="title">{v.title}</p>
            {v.subtitle && <p className="subtitle">{v.subtitle}</p>}
            {v.content.map((c, d) => (
              <p key={d} className="content">
                {c}
              </p>
            ))}
          </Step>
        ))}
        {isPC ? (
          <>
            <Line1
              className="line1"
              style={{
                strokeDasharray: 2000,
                strokeDashoffset:
                  top > 450 ? (3350 - top * 3 < 0 ? 0 : 3350 - top * 3) : 2000,
              }}
            />
            <Line2
              className="line2"
              style={{
                strokeDasharray: 2000,
                strokeDashoffset:
                  top > 900 ? (4700 - top * 3 < 0 ? 0 : 4700 - top * 3) : 2000,
              }}
            />
          </>
        ) : (
          <LineMobile style={{ height: `${top - 500<0?0:top - 500}px` }} />
        )}
      </StepsContainer>
    </StepsWrapper>
  )
}
const LineMobile = styled.div`
  position: absolute;
  width: 3px;
  transform: translateX(-200px);
  background: #000;
  max-Height:calc(100% - 550px);
  ${media.mobile`
    transform:translateX(-150px);
  `}
`

const StepsWrapper = styled.div`
  width: 100%;
  background: #31cf84;
  position: relative;
  .marquee-container {
    width: 100%;
    height: auto;
    font-family: GenosBold;
    font-size: 50px;
    color: #31cf84;
    -webkit-text-stroke: 1px #000;
    border-bottom: 1px solid #000;
    overflow: hidden;
    &:hover {
      color: #fff;
      -webkit-text-stroke: 0px;
    }
  }
`

const StepsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 1250px;
  margin: 0 auto;
  max-width: 1024px;
  padding-top: 300px;
  svg {
    position: absolute;
  }
  .line1 {
    width: 50%;
    top: 300px;
    left: 0;
    stroke-width: 2;
  }
  .line2 {
    width: 70%;
    top: 600px;
    right: 0;
    stroke-width: 1.5;
  }
  ${media.tablet`
    height: auto;
    display:flex;
    flex-direction:column;
    align-items:center;
  `}
`

const Step = styled.div`
  font-family: Glory;
  width: 30%;
  min-width: 340px;
  opacity: 0;
  transform: scale(0);
  position: absolute;
  z-index:1;
  ${media.tablet`
    position: relative;
    margin-bottom:200px;
  `}
  ${media.mobile`
    min-width: 240px;
  `}
  &.active {
    animation: show 0.5s ease-in-out forwards;
  }
  .title {
    font-size: 40px;
    font-weight: bold;
    &::after {
      content: '${(props) => props.num}';
      position: absolute;
      color: #fff;
      width: 40px;
      height: 40px;
      background: #000;
      border-radius: 50%;
      left: -50px;
      text-align: center;
    }
  }
  .subtitle {
    font-size: 30px;
  }
  .content {
    font-size: 24px;
    margin-top: 15px;
  }
  &.step1 {
    top: 280px;
    left: 22%;
    &::before {
      content: '';
      position: absolute;
      width: 206px;
      height: 185px;
      background: url(${Step1Img});
      bottom: 110%;
    }
    &::after {
      content: '';
      position: absolute;
      width: 45px;
      height: 59px;
      background: url(${Step1Decoration});
      left: 150px;
      bottom: 230%;
      animation: step1anim 3s 1s ease-in-out infinite;
    }
    ${media.tablet`
    top:0;
    left:0;
  `}
  }
  &.step2 {
    /* position: absolute; */
    top: 620px;
    left: 56%;
    &::before {
      content: '';
      position: absolute;
      width: 126px;
      height: 131px;
      background: url(${Step2Img});
      bottom: 100%;
      left: 160px;
    }
    &::after {
      content: '';
      position: absolute;
      width: 41px;
      height: 46px;
      background: url(${Step2Decoration});
      bottom: 100%;
      left: 160px;
      animation: step2anim 1s ease-in-out infinite;
    }
    ${media.tablet`
    top:0;
    left:0;
    margin-bottom:300px;
  `}
  }
  &.step3 {
    /* position: absolute; */
    top: 920px;
    left: 12%;
    &::before {
      content: '';
      position: absolute;
      width: 127px;
      height: 144px;
      background: url(${Step3Img});
      bottom: 110%;
      left: 20px;
    }
    &::after {
      content: '';
      position: absolute;
      width: 54px;
      height: 53px;
      background: url(${Step3Decoration});
      left: 60px;
      animation: step3anim 2s ease-in-out infinite;
    }
    ${media.tablet`
    top:0;
    left:0;
  `}
  }
  @keyframes step1anim {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    20% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes step2anim {
    0% {
      transform: translate(0);
    }
    50% {
      transform: translate(20%, -20%);
    }
    100% {
      transform: translate(0);
    }
  }
  @keyframes step3anim {
    0% {
      bottom: 190%;
    }
    50% {
      bottom: 200%;
    }
    100% {
      bottom: 190%;
    }
  }
  @keyframes show {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    30% {
      opacity: 1;
    }
    70% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`

export default Steps
