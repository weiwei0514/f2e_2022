import React from 'react'
import styled from 'styled-components'
import InfoBlock from './InfoBlock'
import SharesBlock from './SharesBlock'

import rope from '../../images/bg_event_rope.png'

const Race = () => {
  return (
    <RaceWrapper>
      <InfoBlock />
      <SharesBlock />
    </RaceWrapper>
  )
}

const RaceWrapper = styled.div`
  background-color: #31cf84;
  color: #fff;
  position: relative;
  overflow: hidden;
  padding-top: 200px;
  padding-bottom: 100px;
  :before {
    content: '';
    background-color: #201f20;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0 0 100% 100%;
    height: 1200px;
    width: 3200px;
    z-index: 1;
  }
  :after {
    content: '';
    position: absolute;
    bottom: 380px;
    background-image: url(${rope});
    background-position: center top;
    background-repeat: no-repeat;
    background-size: contain;
    height: 576px;
    width: 100%;
    z-index: 0;
  }
`

export default Race
