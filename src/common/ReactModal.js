import React, { useEffect } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
// style
const StyledReactModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
  z-index: 80;
  .darkBg {
    width: 100%;
    height: 100%;
    z-index: 1;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    cursor:pointer ;
  }
  .pop-enter {
    opacity: 0;
  }
  .pop-enter-active {
    opacity: 1;
    transition: 0.3s ease-out;
  }
  .pop-exit {
    opacity: 1;
  }
  .pop-exit-active {
    opacity: 0;
    transition: 0.3s ease-out;
  }
`
export default ({
  isOpen = false,
  onModalClose,
  children,
  justify = "center",
}) => {
  useEffect(() => {
    const escClick = (event) => {
      if (event.keyCode === 27) onModalClose()
    }
    document.addEventListener("keydown", (event) => escClick(event))
    return document.removeEventListener("keydown", escClick)
  }, [onModalClose])

  useEffect(() => {
    const rootStyle = document.getElementById("root").style
    rootStyle.overflow = isOpen ? "hidden" : ""
  }, [isOpen])

  return (
    <StyledReactModal isOpen={isOpen} justify={justify}>
      <div className="darkBg" onClick={(e) => onModalClose()} />
      <CSSTransition
        classNames="pop"
        in={isOpen}
        timeout={300}
        unmountOnExit={true}
      >
        {children}
      </CSSTransition>
    </StyledReactModal>
  )
}
