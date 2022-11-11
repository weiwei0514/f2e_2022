import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import star from 'Week1/images/step01_star.png'
import f2eLogo from 'Week1/images/f2e_logo.png'
import media from 'lib/mediaQuery'
import MenuList from './MenuList'
import { useWindowDimensions, useScrollTop } from 'useHooks'

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const menuHandler = () => {
    setMenuOpen(!menuOpen)
  }
  const windowHeight = useWindowDimensions().height
  const scrollTop = useScrollTop()
  useEffect(() => {
    if (scrollTop > windowHeight) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }, [scrollTop, windowHeight])
  return (
    <>
      <MenuBar className={`${isSticky ? 'sticky' : ''}`}>
        <div className="btn" onClick={menuHandler}>
          <div className="hamburger">
            <div className={`bar bar1 ${menuOpen}`} />
            <div className={`bar bar2 ${menuOpen}`} />
          </div>
          <span className={`menu-text ${menuOpen}`}>Menu</span>
        </div>
        <img className={`f2e-logo ${isSticky}`} src={f2eLogo} alt="logo"></img>
        <div className={`sign-up ${menuOpen} ${isSticky ? 'sticky' : ''}`}>
          <div>
            <img src={star} alt="" />
            <p>立即報名</p>
          </div>
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
    &.sticky{
      padding: 0 5%;
      width: 100%;
      height: 120px;
      flex-direction:row;
      background: #191919;
      top:0;
      .btn{
        position:relative;
        background: none;
        border: none;
        justify-content: flex-start;
        left:0;
        top:0;
        width: 33%;
      }
    }
  `}
  ${media.mobile`
    &.sticky{
      height:80px;
    }
  `}
  .f2e-logo {
    display: none;
    ${media.tablet`
      &.true {
        display: block;
      }
    `}
  }
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
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 200px;
    background: #00ffa2;
    cursor: pointer;
    &.sticky {
      display: flex;
    }
    img {
      width: 20px;
      height: 20px;
      margin-bottom: 15px;
    }
    p {
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
      width: auto;
      height: auto;
      width: 33%;
      background: none;
      &.sticky{
        display:flex;
        align-items:flex-end;
        > div {
          padding:20px 30px;
          border-radius:50px;
          display:flex;
          justify-content:center;
          background: #00ffa2;
        }
        img {
          margin-bottom: 0;
        }
        p {
          writing-mode: inherit;
        }
      }
    `}
    ${media.mobile`
      &.sticky{display:none;}
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
