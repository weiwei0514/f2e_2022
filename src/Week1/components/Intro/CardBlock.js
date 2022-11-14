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
import sun from '../../images/sun_02.png'
import media from 'lib/mediaQuery'

const CardBlock = () => {
  return (
    <CardBlockWrapper>
      <div className="ball">
        <div>
          <h1>互動式網頁設計</h1>
          <h2>INTERACTIVE WEB DESIGN</h2>
          <p>．UI 設計師．前端工程師</p>
          <p>攜手合作</p>
          <img alt="partner" src={partner} />
        </div>
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
    background: url(${bg}) no-repeat;
    background-position-x: center;
    background-size: cover;
    text-align: center;
    line-height: 1.5;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 2;
    ${media.tablet`
      height: 600px;
    `}
    ${media.mobile`
      height: 400px;
    `}
    h1,
    h2 {
      font-size: 80px;
      font-weight: bold;
      ${media.tablet`
         font-size: 50px;
      `}
      ${media.mobile`
        font-size: 30px;
      `}
    }
    h2 {
      color: #fff;
      margin-bottom: 30px;
      font-family: GenosBold;
    }
    p {
      font-size: 30px;
      ${media.mobile`
        font-size: 24px;
      `}
    }
    img {
      margin-top: 30px;
    }
  }
  .cardsWrapper {
    padding-bottom: 100px;
    background-color: #b3b9c7;
    ${media.tablet`
      padding-bottom: 50px;
    `}
  }
  /* week01 */
  .cards {
    width: 90%;
    margin: 0 auto;
    padding-top: 100px;
    ${media.mobile`
    padding-top: 50px;
    `}
    .card {
      width: 100%;
      height: 260px;
      margin-bottom: 50px;
      ${media.mobile`
        height:200px;
      `}
      :nth-child(1) {
        .bg {
          background-image: url(${card1hover});
          background-color: #31cf84;
        }
      }
      /* week02 */
      :nth-child(2) {
        .bg {
          background-image: url(${card2hover});
          background-color: #edeb2f;
        }
      }
      /* week03 */
      :nth-child(3) {
        .bg {
          background-image: url(${card3hover});
          background-color: #5cb0ff;
        }
      }
      .bg {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 4% 5%;
        background-position: center top;
        background-repeat: no-repeat;
        background-size: 100%;
        box-shadow: 0 10px 10px rgb(0 0 0 / 25%);
        .week {
          font-family: Genos;
          font-size: 35px;
          text-align: right;
          span {
            font-family: GenosBold;
            font-weight: bold;
          }
          ${media.mobile`
            font-size: 22px;
          `}
        }
        .info {
          display: flex;
          height: 100%;
          justify-content: space-between;
          align-items: flex-end;
          ul {
            li {
              font-size: 24px;
              position: relative;
              padding-left: 40px;
              margin-top: 20px;
              ${media.mobile`
                font-size: 18px;
                padding-left: 20px;
              `}
              :before {
                content: '';
                position: absolute;
                left: 0px;
              }
              :not(.hashtag):before {
                width: 32px;
                height: 24px;
                background-image: url(${cardIcon});
                background-repeat: no-repeat;
                background-size: contain;
                ${media.mobile`
                  width: 24px;
                  height: 18px;
                `}
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
            width: 140px;
            height: 40px;
            line-height: 40px;
            font-size: 20px;
            text-align: center;
            border-radius: 99em;
            cursor: pointer;
            ${media.mobile`
              font-size: 16px;
              width: 100px;
              height: 30px;
              line-height: 30px;
            `}
          }
        }
      }
    }
  }

  ${media.pc`
      .cards {
        padding-top: 260px;
        height: 970px;
        position: relative;
        overflow: hidden;
        z-index: 1;
        width:100% ;
        .card {
          height: 490px;
          width: 90%;
          margin: 0 auto;
          perspective: 900px;
          transition: 0.6s ease;
          will-change: transform;
          max-width:1240px;
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
                background-color: #31cf84;
                .week {
                  color: #201F20;
                }
                .info {
                  opacity: 1; 
                }
              }
            }
          }
          :nth-child(2) {
            .bg {
              background-image: url(${card2});
              .week {
                color: #edeb2f;
              }
              :hover {
                background-image: url(${card2hover});
                background-color: #edeb2f;
                .week {
                  color: #201F20;
                }
                .info {
                  opacity: 1; 
                }
              }
            }
          }
          :nth-child(3) {
            .bg {
              background-image: url(${card3});
              .week {
                color: #5cafff;
              }
              :hover {
                background-image: url(${card3hover});
                background-color: #5cb0ff;

                .week {
                color: #201F20;
                }
                .info {
                  opacity: 1; 
                }
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
            background-size: contain ;
            background-color: #201f20 ;
            padding: 5% 5% 0;
            display: flex;
            flex-direction: column;
            .week {
              font-family:Genos;
              font-size: 50px;
              text-align: right;
              /* margin-top: 5%; */
              span {
                font-family:GenosBold;
                font-weight: bold;
              }
            }
            .info {
              display: flex;
              flex: 1;
              justify-content: space-between;
              align-items: center;
              opacity: 0;
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
                cursor: pointer;
              }
            }
          }
        }
      }
    
  `}
`

export default CardBlock
