import React from 'react'
import styled from 'styled-components'
import star from '../../images/price_title_icon.png'
import dialogBg from '../../images/dialog02.png'
import shape from '../../images/shape.png'
import sun1 from '../../images/sun_03.png'
import sun2 from '../../images/sun_04.png'
import media from 'lib/mediaQuery'
const InfoBlock = () => {
  return (
    <InfoBlockWrapper>
      <h5>區區修煉已經無法滿足了嗎？</h5>
      <div className="dialogBg">
        <img src={dialogBg} alt="dialog" />
        <p>還有比賽等著你！</p>
      </div>
      <article className="left">
        <section>
          <h6>評審機制</h6>
          <ul>
            <li>
              初選：將由六角學院前端、UI 評審進行第一波篩選，並於
              12/5（五）公布初選佳作名單
            </li>
            <li>
              決選：由三大企業針對該企業主題進行入圍獎最後篩選，並於
              12/23（五）公布企業得獎名單
            </li>
          </ul>
        </section>
      </article>
      <article>
        <section>
          <h6>獎項</h6>
          <ul>
            <li>
              初選佳作 共六十位 <span className="highlight">數位獎狀</span>
              <p className="description">每週主題個人組十位、團體組十組</p>
            </li>
            <li>
              個人企業獎 共六位 <span className="highlight">NTD 3,000/位</span>
              <p className="description">
                每週主題各 2 名，設計 1 位、前端 1 位
              </p>
            </li>
            <li>
              團體企業獎 <span className="highlight">共三組 NTD 10,000/組</span>
              <p className="description"> 每週主題各 1 組</p>
            </li>
            <li>以上皆提供完賽數位獎狀</li>
          </ul>
        </section>
      </article>
      <div className="signupBtn">
        <button type="button">我要報名</button>
      </div>
    </InfoBlockWrapper>
  )
}

const InfoBlockWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: stretch;
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
  padding-top: 200px;
  /* black curl bg */
  :before {
    content: '';
    background-color: #201f20;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0 0 100% 100%;
    height: 100%;
    width: 3200px;
    ${media.tablet`
      border-radius:0;
    `}
  }
  h5 {
    font-size: 34px;
    font-weight: bold;
    margin-bottom: 60px;
    width: 48%;
    color: #fff;
    z-index: 1;
    text-align: center;
    white-space: nowrap;
    ${media.tablet`
      width:100%;
      font-size:45px;
    `}
    ${media.mobile`
      font-size:26px;
    `}
  }
  .dialogBg {
    position: relative;
    width: 48%;
    height: 121px;
    z-index: 2;
    :before {
      content: '';
      position: absolute;
      top: -173px;
      right: -50px;
      background: url(${sun1});
      width: 143px;
      height: 143px;
      animation: sunRotate 4s linear infinite;
      ${media.tablet`
          transform: translate(-50%,-50%);
          animation: sunRotateMobile 4s linear infinite;
          top: 800px;
          right: -140px;
        `}
    }
    img {
      position: absolute;
      width: 100%;
      top: -30px;
      left: -20px;
    }
    p {
      text-align: center;
      position: relative;
      font-size: 52px;
      font-weight: bold;
      color: #201f20;
      transform: translate(-10px, -15px);
    }
    ${media.tablet`
      width:100%;
      margin-bottom:100px;

      img {
        top:0;
        left:0;
      }
      p {
        font-size:72px;
        line-height:115px;
        transform:translate(0) ;
      }
    `}
    ${media.mobile`
      margin-bottom:0;
      p{
        font-size:36px;
        line-height:55px;

      }
    `}
  }
  article {
    z-index: 1;
    width: 48%;
    display: flex;
    flex-direction: column;
    z-index: 3;
    section {
      padding: 50px 10% 80px;
      background: #201f20;
      border: 1px solid #31cf84;
      border-right-width: 5px;
      border-bottom-width: 5px;
      border-radius: 20px;
      flex: 1;
      z-index: 2;

      h6 {
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 30px;
      }
      ul {
        margin-left: 36px;
        li {
          position: relative;
          font-size: 24px;
          line-height: 30px;
          :not(:first-child) {
            margin-top: 20px;
          }
          :before {
            content: '';
            position: absolute;
            top: 0;
            left: -36px;
            background-image: url(${star});
            background-position: center;
            background-size: contain;
            width: 24px;
            height: 24px;
          }
          .highlight {
            color: #ffea00;
          }
          .description {
            font-size: 18px;
          }
        }
      }
    }
    /* sun */
    &.left {
      :before {
        content: '';
        position: absolute;
        background: url(${sun2});
        width: 258px;
        height: 262px;
        transform: translate(-50%, 100%);
        animation: sunRotate 4s linear infinite;
        ${media.tablet`
          transform: translate(-50%,-50%);
          animation: sunRotateMobile 4s linear infinite; 
        `}
      }
    }
    ${media.tablet`
      width:100%;
      margin-bottom:50px;
    `}
  }
  .signupBtn {
    width: 100%;
    text-align: center;
    margin: 200px 0;
    z-index: 1;
    button {
      position: relative;
      background: none;
      border: none;
      font-size: 30px;
      color: #ffea00;
      cursor: pointer;
      :after {
        content: '';
        position: absolute;
        background-image: url(${shape});
        height: 227px;
        width: 227px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: shapeRotate 4s linear infinite;
      }
    }

    ${media.tablet`
      margin: 150px 0;
    `}
  }

  @keyframes shapeRotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    50% {
      transform: translate(-50%, -50%) rotate(180deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @keyframes sunRotate {
    from {
      transform: translate(-50%, 50%) rotate(0deg);
    }
    50% {
      transform: translate(-50%, 50%) rotate(180deg);
    }
    to {
      transform: translate(-50%, 50%) rotate(360deg);
    }
  }

  @keyframes sunRotateMobile {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    50% {
      transform: translate(-50%, -50%) rotate(180deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`

export default InfoBlock
