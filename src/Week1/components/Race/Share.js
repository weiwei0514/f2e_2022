import React from 'react'
import styled from 'styled-components'
import media from 'lib/mediaQuery'
const ShareBlock = ({ info }) => {
  const { img, title, desc } = info

  return (
    <ShareWrapper>
      <div className="mainBlock">
        <div className="img">
          <img alt="share card img" src={img} />
        </div>
        <div className="info">
          <div className="title">
            <p className="name">{title.name}</p>
            <p className="time">{title.time}</p>
          </div>
          <div className="desc">
            <p className="name">{desc.name}</p>
            <p className="job">{desc.job}</p>
          </div>
        </div>
      </div>
      <div className="bg"></div>
    </ShareWrapper>
  )
}

const ShareWrapper = styled.div`
  position: relative;
  width:23%;
  height:458px;
  ${media.pc`
    transform: rotateZ(-3deg);
    transition: all 0.3s;
    :nth-child(even) {
      transform: rotateZ(3deg);
    }
    :hover {
      transform: rotateZ(0deg);
    }
  `}
  ${media.tablet`
    width:100%;
    height:320px;
    margin-bottom:20px;
  `}
  .mainBlock {
    display: flex;
    flex-direction: column;
    height: calc(100% - 8px);
    width: calc(100% - 10px);
    padding: 20px;
    background-color: #201f20;
    border-radius: 13px;
    position: relative;
    z-index: 1;
    .img {
      img {
        width: 100%;
      }
    }
    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .title {
        color: #00ffa2;
        line-height: 1.2;
        font-weight: bold;
        .name {
          font-size: 18px;
        }
        .time {
          font-size: 16px;
        }
      }
      .desc {
        line-height: 1.5;
        .name {
          color: #fff;
          font-size: 16px;
          font-weight: bold;
        }
        .job {
          color: #848484;
          font-size: 14px;
        }
      }
    }
    ${media.tablet`
      flex-direction:row;
    `}
  }
  .bg {
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 13px 26px 13px 26px;
    border: 2px solid #201f20;
    background: #31cf84;
    top: 0px;
    left: 0px;
  }
`

export default ShareBlock
