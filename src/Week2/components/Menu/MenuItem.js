import React from "react"
import styled from "styled-components"
const MenuItem = ({ title, icon, isActive, area, setMainArea }) => {
  return (
    <MenuItemWrapper isActive={isActive} onClick={() => setMainArea(area)}>
      {icon}
      <span>{title}</span>
      <div className="select" />
    </MenuItemWrapper>
  )
}
const MenuItemWrapper = styled.div`
  width: 100%;
  height: 36px;
  color: ${(props) => (props.isActive ? "#696cff" : "#697a8d")};
  display: flex;
  align-items: center;
  margin-bottom: 5%;
  cursor: pointer;
  svg {
    margin: 0 30px;
    font-size: 20px;
  }
  span {
    flex: 1;
    font-size: 18px;
    font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  }
  .select {
    height: 100%;
    width: 4px;
    background: ${(props) => (props.isActive ? "#696cff" : "#fff")};
  }
`
export default MenuItem
