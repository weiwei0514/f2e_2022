import React from "react"
import styled from "styled-components"
import { useTitle } from "../useHooks"

const Week1 = ({ title }) => {
  useTitle(title)
  return <Week1Wrapper>week1Wrapper</Week1Wrapper>
}

const Week1Wrapper = styled.div``
export default Week1
