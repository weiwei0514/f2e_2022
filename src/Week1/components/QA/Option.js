import React from "react"
import styled from "styled-components"
import faqActiveIcon from "Week1/images/faq_title_icon.png"

const Option = ({ option, title, optionsHandler, num }) => {
  return (
    <OptionWrapper
      className={option === num ? "active" : ""}
      onClick={() => optionsHandler(num)}
    >
      {option === num && <img src={faqActiveIcon} alt="icon" />}
      {title}
    </OptionWrapper>
  )
}
const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-bottom: 50px;
  cursor: pointer;
  img {
    margin-right: 10px;
  }
  &.active {
    font-weight: bold;
    color: #31cf84;
  }
`
export default Option
