import React from 'react'
import styled from 'styled-components'
import CardBlock from './CardBlock'
import TextBlock from './TextBlock'

const Intro = () => {
  return (
    <IntroWrapper>
      <TextBlock />
      <CardBlock />
    </IntroWrapper>
  )
}

const IntroWrapper = styled.div``

export default Intro
