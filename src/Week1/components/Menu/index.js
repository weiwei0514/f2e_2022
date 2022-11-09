import React, { useState } from 'react'
import styled from 'styled-components'
import star from 'Week1/images/step01_star.png'
import media from 'lib/mediaQuery'
import MenuList from './MenuList'

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuHandler = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <MenuBar>
        <div className="btn" onClick={menuHandler}>
          <div className="hamburger">
            <div className={`bar bar1 ${menuOpen}`} />
            <div className={`bar bar2 ${menuOpen}`} />
          </div>
          <span className={`menu-text ${menuOpen}`}>Menu</span>
        </div>
        <div className={`sign-up ${menuOpen}`}>
          <img src={star} alt="" />
          <span>立即報名</span>
        </div>
      </MenuBar>
      <MenuList menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && <MenuListBackground onClick={() => setMenuOpen(false)} />}
    </>
  )
}

const MenuBar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  right: 0;
  width: 80px;
  height: 100%;
  background: #191919;
  padding-top: 40px;
  z-index: 12;

  ${media.tablet`
    background: none;
  `}
  .btn {
    cursor: pointer;
    ${media.tablet`
      position: absolute;
      display:flex;
      justify-content: center;
      align-items: center;
      right: 30%;
      top:  5%;
      width: 80px;
      height: 80px;
      background: #201F20;
      border: 1px solid #00FFA2;
      border-radius: 20%;
    `}
    ${media.mobile`
      width: 60px;
      height: 60px;
    `}
  }
  .hamburger {
    width: 30px;
    height: 14px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .bar {
    width: 30px;
    height: 2px;
    background: #00ffa2;
    transition: all 0.5s ease;
    &.bar1.true {
      position: absolute;
      transform: rotate(135deg);
      top: 6px;
    }
    &.bar2 {
      &.true {
        position: absolute;
        transform: rotate(-135deg);
        bottom: 6px;
      }
    }
  }
  .menu-text {
    writing-mode: vertical-lr;
    text-orientation: mixed;
    color: #00ffa2;
    font-family: GenosBold;
    font-size: 24px;
    letter-spacing: 2.4px;
    margin: 20px 0 0 4px;
    &.true {
      display: none;
    }
    ${media.tablet`
      display:none;
    `}
  }
  .sign-up {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 200px;
    background: #00ffa2;
    img {
      width: 20px;
      height: 20px;
      margin-bottom: 15px;
    }
    span {
      color: #201f20;
      font-weight: bold;
      font-size: 24px;
      letter-spacing: 2.4px;
      writing-mode: vertical-lr;
    }
    &.true {
      display: none;
    }
    ${media.tablet`
      display:none;
    `}
  }
`
const MenuListBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  cursor: pointer;
`
export default Menu
