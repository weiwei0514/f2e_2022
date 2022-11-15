import React from "react"
import styled from "styled-components"
import { BsBell } from "react-icons/bs"
import avatar from "../../images/avatar.png"
const Member = () => {
  return (
    <MemberWrapper>
      <Bell>
        <BsBell />
      </Bell>
      <Avatar />
    </MemberWrapper>
  )
}
const MemberWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Bell = styled.div`
  position: relative;
  margin-right: 40px;
  cursor: pointer;
  svg {
    font-size: 20px;
  }
  ::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ff6c19;
    top: 0;
    right: 0;
  }
`
const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: url(${avatar}) no-repeat;
  background-position: center center;
  background-size: 100%;
  cursor: pointer;
`
export default Member
