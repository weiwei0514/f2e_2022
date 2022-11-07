import React from 'react'
import styled from 'styled-components'
import Marquee from 'react-fast-marquee'
import { ReactComponent as Line1 } from '../images/step_road_01.svg'
import { ReactComponent as Line2 } from '../images/step_road_02.svg'
const Steps = () => {
  const marqueeSetting = {
    direction: 'right',
    speed: 120,
    gradient: false
  }
  const marqueeText = "LET'S SIGN UP THE F2E"
  const stepsList = [
    {
      title: '開放報名',
      subtitle: '10/13~10/30',
      content: ['#截止前可修改報名組別']
    },
    {
      title: '登錄作品',
      subtitle: '10/31~11/28',
      content: [
        '#依賽程登錄作品',
        '#10/31(一) UI、團體組開賽；11/07(一) 前端組開賽'
      ]
    },
    {
      title: '額外競賽',
      subtitle: '',
      content: ['#主題豐厚獎金等著你']
    }
  ]
  return (
    <StepsWrapper>
      <div className="marquee-container">
        <Marquee {...marqueeSetting}>
          {Array.from({ length: 10 }, (v, i) => (
            <p>{marqueeText}&nbsp;</p>
          ))}
        </Marquee>
      </div>
      <StepsContainer>
        {stepsList.map((v, i) => (
          <Step className="one">
            <p className="title">{v.title}</p>
            {v.subtitle && <p className="subtitle">{v.subtitle}</p>}
            {v.content.map((c, d) => (
              <p className="content">{c}</p>
            ))}
          </Step>
        ))}
        <Line1 className="line1"/>
        <Line2 className="line2"/>
      </StepsContainer>
    </StepsWrapper>
  )
}

const Step = styled.div`
  font-family: Glory;
  .title {
    font-size: 40px;
    font-weight: bold;
  }
  .subtitle {
    font-size: 30px;
  }
  .content {
    font-size: 24px;
  }
`

const StepsWrapper = styled.div`
  width: 100%;
  background: #31cf84;
  position: relative;
  .marquee-container {
    width: 100%;
    height:auto;
    font-family: GenosBold;
    font-size: 50px;
    color: #31cf84;
    -webkit-text-stroke: 1px #000;
    border-bottom: 1px solid #000;
    &:hover {
      color: #fff;
      -webkit-text-stroke: 0px;
    }
  }
`

const StepsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1200px;
  svg{

  }
  .line1{
    // stroke-dashoffset: 2000;
    // stroke-dasharray: 2000;
  }
`

export default Steps
