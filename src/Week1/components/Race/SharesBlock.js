import React from 'react'
import styled from 'styled-components'
import Share from './Share'
import media from 'lib/mediaQuery'
import { shareList } from './doc'

import star from '../../images/bg_event_star.png'

const SharesBlock = () => {
  return (
    <SharesBlockWrapper>
      <h5>各界大神接力分享</h5>
      <div className="shareList">
        {shareList.map((share) => (
          <Share info={share} />
        ))}
      </div>
      <div className="star position1"></div>
      <div className="star position2"></div>
      <div className="star small position3"></div>
      <div className="star small position4"></div>
    </SharesBlockWrapper>
  )
}

const SharesBlockWrapper = styled.div`
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  h5 {
    color: #201f20;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    margin: 100px 0;
  }
  .shareList {
    display: flex;
    justify-content: space-between;
    ${media.tablet`
      flex-direction:column;
    `}
  }
  .star {
    ${media.tablet`
      display:none;
    `}
    position: absolute;
    width: 58px;
    height: 58px;
    background-image: url(${star});
    background-size: contain;
    &.small {
      width: 40px;
      height: 40px;
    }
    &.position1 {
      top: 60px;
      left: -60px;
    }
    &.position2 {
      top: 360px;
      right: -180px;
    }
    &.position3 {
      top: 260px;
      left: -210px;
    }
    &.position4 {
      top: 300px;
      right: -210px;
    }
  }
`

export default SharesBlock
