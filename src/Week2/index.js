import React, { useState } from 'react'
import styled from 'styled-components'

// components
import Menu from 'Week2/components/Menu'
import Member from 'Week2/components/Member'
import Home from 'Week2/components/Home'
import Files from 'Week2/components/Files'
import Archive from 'Week2/components/Archive'
import Trash from 'Week2/components/Trash'
import Setting from 'Week2/components/Setting'
import Support from 'Week2/components/Support'
import Sign from 'Week2/components/Sign'

const Week2 = () => {
  const [mainArea, setMainArea] = useState('Home')
  const main = {
    Home: <Home />,
    Files: <Files />,
    Archive: <Archive />,
    Trash: <Trash />,
    Setting: <Setting />,
    Support: <Support />,
    Sign: <Sign />,
  }
  return (
    <Week2Wrapper>
      <Menu mainArea={mainArea} setMainArea={setMainArea} />
      <MainArea>
        <Member />
        {main[mainArea]}
      </MainArea>
    </Week2Wrapper>
  )
}
const Week2Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #f5f5f9;
  display: flex;
`
const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 25px 5%;
  overflow: overlay;
`
export default Week2
