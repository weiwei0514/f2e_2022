import React from "react"
import styled from "styled-components"
import logo from "../../images/logo.png"
import { menuList } from "./doc"
import MenuItem from "./MenuItem"
import ad from "../../images/ad.png"
const Menu = ({ mainArea, setMainArea }) => {
  return (
    <MenuWrapper>
      <img className="logo" src={logo} alt="" />
      <div className="start-btn" onClick={() => setMainArea("Sign")}>
        <span className="icon">＋</span>
        <span>開始簽署</span>
      </div>
      <MenuList>
        {menuList.map((v) => (
          <MenuItem
            key={v.id}
            title={v.title}
            icon={v.icon}
            isActive={mainArea === v.id}
            setMainArea={setMainArea}
            area={v.id}
          />
        ))}
      </MenuList>
      <Upgrade>
        <p>專業方案讓簽署體驗</p>
        <p>更上一層樓！</p>
        <div className="upgrade">立即升級</div>
      </Upgrade>
    </MenuWrapper>
  )
}

const MenuWrapper = styled.div`
  width: 230px;
  height: 100%;
  padding: 30px 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    width: 100%;
    object-fit: scale-down;
    margin-bottom: 50px;
  }
  .start-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #696cff;
    border-radius: 100px;
    margin-bottom: 50px;
    width: 170px;
    height: 36px;
    box-shadow: 0px 4px 10px 1px rgba(105, 108, 255, 0.3);
    cursor: pointer;
    span {
      color: #fff;
      font-size: 16px;
      &.icon {
        font-weight: bold;
        margin-right: 5px;
      }
    }
  }
`

const MenuList = styled.div`
  width: 100%;
  flex: 1;
`

const Upgrade = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 170px;
  height: 110px;
  background: #f1f1ff;
  border-radius: 15px;
  color: #252525;
  ::before {
    content: "";
    position: absolute;
    background: url(${ad}) no-repeat;
    background-position: center center;
    width: 100%;
    height: 129px;
    top: -100%;
  }
  p {
    font-size: 14px;
    line-height: 20px;
  }
  .upgrade {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 102px;
    height: 25px;
    color: #696cff;
    border: 2px solid #696cff;
    border-radius: 5px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
    font-size: 14px;
    margin-top: 5px;
    cursor: pointer;
  }
`
export default Menu
