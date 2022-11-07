import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import Marquee from "react-fast-marquee"
import { ReactComponent as Line1 } from "../images/step_road_01.svg"
import { ReactComponent as Line2 } from "../images/step_road_02.svg"
import Step1Img from "../images/step01_hand.png"
import Step2Img from "../images/step02_roll.png"
import Step3Img from "../images/step03_box.png"
import Step1Decoration from "../images/step01_2star.png"
import Step2Decoration from "../images/step02_line.png"
import Step3Decoration from "../images/step03_star.png"
const Steps = () => {
  const [top, setTop] = useState(0)
  const marqueeSetting = {
    direction: "right",
    speed: 120,
    gradient: false,
  }
  const marqueeText = "LET'S SIGN UP THE F2E"
  const stepsList = [
    {
      title: "開放報名",
      subtitle: "10/13~10/30",
      content: ["#截止前可修改報名組別"],
      showTop: 450,
    },
    {
      title: "登錄作品",
      subtitle: "10/31~11/28",
      content: [
        "#依賽程登錄作品",
        "#10/31(一) UI、團體組開賽；11/07(一) 前端組開賽",
      ],
      showTop: 860,
    },
    {
      title: "額外競賽",
      subtitle: "",
      content: ["#主題豐厚獎金等著你"],
      showTop: 1220,
    },
  ]
  const stepRef = useRef(null)

  const wheelHandler = () => {
    const step = stepRef.current
    const getTop = step?.getBoundingClientRect().top
    const windowHeight = window.innerHeight
    setTop(windowHeight - getTop)
  }

  useEffect(() => {
    const root = document.getElementById("root")
    root.addEventListener("wheel", wheelHandler)
  }, [])

  return (
    <StepsWrapper id="step" ref={stepRef}>
      <div className="marquee-container">
        <Marquee {...marqueeSetting}>
          {Array.from({ length: 10 }, (v, i) => (
            <p key={i}>{marqueeText}&nbsp;</p>
          ))}
        </Marquee>
      </div>
      <StepsContainer top={top}>
        {stepsList.map((v, i) => (
          <Step
            key={i}
            className={`step${i + 1} ${top > v.showTop ? "active" : ""}`}
            num={i + 1}
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
      </StepsContainer>
    </StepsWrapper>
  )
}

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
`

const Step = styled.div`
  font-family: Glory;
  width: 30%;
  opacity: 0;
  transform:scale(0) ;
  /* transition: all .5s ease; */
  &.active {
    animation: show .5s ease-in-out forwards;
  }
  .title {
    font-size: 40px;
    font-weight: bold;
    &::before {
      content: "${(props) => props.num}";
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
    position: absolute;
    top: 280px;
    left: 22%;
    &::before {
      content: "";
      position: absolute;
      width: 206px;
      height: 185px;
      background: url(${Step1Img});
      bottom: 110%;
    }
    &::after {
      content: "";
      position: absolute;
      width: 45px;
      height: 59px;
      background: url(${Step1Decoration});
      left: 50%;
      bottom: 230%;
      animation: step1anim 3s 1s ease-in-out infinite;
    }
  }
  &.step2 {
    position: absolute;
    top: 620px;
    left: 56%;
    &::before {
      content: "";
      position: absolute;
      width: 126px;
      height: 131px;
      background: url(${Step2Img});
      bottom: 100%;
      right: 10%;
    }
    &::after {
      content: "";
      position: absolute;
      width: 41px;
      height: 46px;
      background: url(${Step2Decoration});
      bottom: 100%;
      right: 40%;
      animation: step2anim 1s ease-in-out infinite;
    }
  }
  &.step3 {
    position: absolute;
    top: 920px;
    left: 12%;
    &::before {
      content: "";
      position: absolute;
      width: 127px;
      height: 144px;
      background: url(${Step3Img});
      bottom: 110%;
      left: 10%;
    }
    &::after {
      content: "";
      position: absolute;
      width: 54px;
      height: 53px;
      background: url(${Step3Decoration});
      right: 60%;
      animation: step3anim 2s ease-in-out infinite;
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
        transform:scale(0) ;
      }
      30% {
        opacity: 1;
      }
      70% {
        transform:scale(1.2) ;
      }
      
      100% {
        transform:scale(1) ;
        opacity: 1;
      }
    }
  }
`

export default Steps
