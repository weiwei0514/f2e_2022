import React from 'react'
import styled from 'styled-components'
import star from '../../images/price_title_icon.png'
import dialogBg from '../../images/dialog02.png'
import shape from '../../images/shape.png'

const InfoBlock = () => {
  return (
    <InfoBlockWrapper>
      <h5>區區修煉已經無法滿足了嗎？</h5>
      <h5 className="dialogBg">還有比賽等著你！</h5>
      <article>
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
  z-index: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: stretch;
  max-width: 1240px;
  margin: 0 auto;
  h5 {
    font-size: 45px;
    font-weight: bold;
    margin-bottom: 60px;
    width: 48%;
    color: #fff;
    z-index: 1;
    white-space: nowrap;
    &.dialogBg {
      position: relative;
      color: #201f20;
      font-size: 65px;
      z-index: 1;
      :after {
        content: '';
        position: absolute;
        background-image: url(${dialogBg});
        left: -0.5em;
        top: -10px;
        background-size: contain;
        background-repeat: no-repeat;
        height: 121px;
        width: 100%;
        z-index: -1;
      }
    }
  }
  article {
    z-index: 1;
    width: 48%;
    display: flex;
    flex-direction: column;
    section {
      padding: 50px 80px 80px;
      background: #201f20;
      border: 1px solid #31cf84;
      border-right-width: 5px;
      border-bottom-width: 5px;
      border-radius: 20px;
      flex: 1;
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
      }
    }
  }
`

export default InfoBlock
