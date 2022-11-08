import React from 'react'
import styled from 'styled-components'
import InfoBlock from './InfoBlock'
import SharesBlock from './SharesBlock'
import media from 'lib/mediaQuery'
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
  padding-bottom: 100px;
  ${media.pc`
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
  `}
`

export default Race
