import React from 'react'
import styled from 'styled-components'
import media from 'lib/mediaQuery'
import { menuList } from './doc'
const MenuList = ({ menuOpen }) => {

  return (
      <MenuListContent className={`${menuOpen}`}>
        {menuList.map((v, i) => (
          <MenuItem key={i} num={i} isOpen={menuOpen}>
            {v.title}
          </MenuItem>
        ))}
      </MenuListContent>
  )
}

const MenuListContent = styled.div`
  padding: 5% 80px 0 0;
  position: fixed;
  right: -40%;
  width: 40%;
  height: 100%;
  background-color: rgba(26, 26, 26, 0.9);
  backdrop-filter: blur(5px);
  z-index: 11;
  transition: all 0.7s ease;
  &.true {
    right: 0;
    ${media.tablet`
      top:0
    `}
  }
  ${media.tablet`
    width:100%;
    top:-100%;
    right:0;
    padding: 20% 0 0;
  `}
  ${media.mobile`
    padding: 5% 0 0;
  `}
`
const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #848484;
  text-align: center;
  font-size: 24px;
  height: 100px;
  opacity: 0;
  cursor: pointer;

  ${(props) =>
    props.isOpen &&
    `animation:showItem .5s ease ${0.7 + props.num / 10}s forwards;`}
  &:hover {
    background: #31cf84;
    color: #201f20;
  }
  ${media.tablet`
    .menu-item{
     font-size: 28px;
    }
  `}

  @keyframes showItem {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export default MenuList
