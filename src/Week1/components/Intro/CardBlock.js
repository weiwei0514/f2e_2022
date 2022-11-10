import React from 'react'
import styled from 'styled-components'

import bg from '../../images/bg_week.png'
import partner from '../../images/icon_partner.png'
import card1 from '../../images/card_redesign.png'
import card1hover from '../../images/card_redesign_hover.png'
import card2 from '../../images/card_canvas.png'
import card2hover from '../../images/card_canvas_hover.png'
import card3 from '../../images/card_js.png'
import card3hover from '../../images/card_js_hover.png'
import cardIcon from '../../images/bg_event_star.png'
import media from 'lib/mediaQuery'

const CardBlock = () => {
  return (
    <CardBlockWrapper>
      <div className="ball">
        <h1>互動式網頁設計</h1>
        <h2>INTERACTIVE WEB DESIGN</h2>
        <p>．UI 設計師．前端工程師</p>
        <p>攜手合作</p>
        <img alt="partner" src={partner} />
      </div>
      <div className="cardsWrapper">
        <div className="cards">
          <div className="card">
            <div className="bg">
              <p className="week">
                WEEK<span>01</span>
              </p>
              <div className="info">
                <ul>
                  <li>THE F2E 活動網站設計</li>
                  <li>滾動視差</li>
                </ul>
                <button>關卡細節</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="bg">
              <p className="week">
                WEEK<span>02</span>
              </p>
              <div className="info">
                <ul>
                  <li>今晚，我想來點點簽名！</li>
                  <li>繪圖畫布</li>
                  <li className="hashtag">凱鈿行動科技</li>
                </ul>
                <button>關卡細節</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="bg">
              <p className="week">
                WEEK<span>03</span>
              </p>
              <div className="info">
                <ul>
                  <li>Scrum 新手村</li>
                  <li>拖拉式互動</li>
                  <li className="hashtag">新加坡商鈦坦科技</li>
                </ul>
                <button>關卡細節</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg"></div>
    </CardBlockWrapper>
  )
}

const CardBlockWrapper = styled.div`
  position: relative;
  .ball {
    height: 858px;
    background-image: url(${bg});
    background-repeat: no-repeat;
    text-align: center;
    padding-top: 300px;
    line-height: 1.5;
    h1,
    h2 {
      font-size: 80px;
      font-weight: bold;
    }
    h2 {
      color: #fff;
      margin-bottom: 30px;
    }
    p {
      font-size: 30px;
    }
    img {
      margin-top: 30px;
    }
  }
  ${media.pc`
    .cardsWrapper {
      padding-bottom: 100px;
      background-color: #b3b9c7;
      .cards {
        margin: 0 auto;
        padding-top: 200px;
        height: 970px;
        position: relative;
        z-index: 1;
        .card {
          height: 490px;
          width: 1240px;
          margin: 0 auto;
          perspective: 900px;
          transition: 0.6s ease;
          will-change: transform;
          margin-top: -250px;
          :hover {
            perspective: 2000px;
            transform: translateY(-200px) rotateX(0);
          }
          :nth-child(1) {
            margin-top: 0;
            .bg {
              background-image: url(${card1});
              color: #000;
              .week {
                color: #00FF86;
              }
              :hover {
                background-image: url(${card1hover});
                .week {
                  color: #201F20;
                }
              }
            }
          }
          :nth-child(2) {
            .bg {
              background-image: url(${card2});
              :hover {
                background-image: url(${card2hover});
              }
            }
          }
          :nth-child(3) {
            .bg {
              background-image: url(${card3});
              :hover {
                background-image: url(${card3hover});
              }
            }
          }
          .bg {
            overflow: hidden;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1;
            transform-style: preserve-3d;
            transform: rotateX(-10deg) translateZ(-5px);
            box-shadow: 0 -15px 32px rgb(0 0 0 / 25%);
            transition: 0.3s ease;
            background-position: center top;
            background-repeat: no-repeat;
            padding: 0 80px;
            display: flex;
            flex-direction: column;
            .week {
              font-size: 50px;
              text-align: right;
              margin-top: 80px;
              span {
                font-weight: bold;
              }
            }
            .info {
              display: flex;
              flex: 1;
              justify-content: space-between;
              align-items: center;
              ul {
                li {
                  font-size: 40px;
                  position: relative;
                  padding-left: 40px;
                  margin-bottom: 20px;
                  :before {
                    content: '';
                    position: absolute;
                    top: 4px;
                    left: 0px;
                  }
                  :not(.hashtag):before {
                    width: 32px;
                    height: 29px;
                    background-image: url(${cardIcon});
                    background-repeat: no-repeat;
                    background-size: contain;
                  }
                  &.hashtag {
                    :before {
                    content: '#';
                    }
                  }
                }
              }
              button {
                background-color: #201f20;
                color: #fff;
                border: none;
                width: 200px;
                height: 60px;
                line-height: 60px;
                font-size: 24px;
                text-align: center;
                border-radius: 99em;
              }
            }
          }
        }
      }
    }
  `}
`

export default CardBlock
