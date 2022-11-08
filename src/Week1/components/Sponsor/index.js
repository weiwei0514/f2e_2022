import React, { useCallback } from "react"
import styled from "styled-components"
import SponsorSection from "./SponsorSection"
import sp1 from "../../images/footer_logo_block.png"
import sp2 from "../../images/footer_logo_singapore.png"
import sp3 from "../../images/footer_logo_jira.png"
import sp4 from "../../images/footer_logo_kdan.png"
import sp5 from "../../images/footer_logo_miro.png"
import sp6 from "../../images/footer_logo_dotted.png"
import fbg from "../../images/footer_ball.png"
import arrowUp from "../../images/arrow_up.png"
import media from "lib/mediaQuery"
const Sponsor = () => {
  const sponsorList = [
    {
      title: "鑽石級贊助商",
      imgs: [sp1, sp2, sp3],
    },
    {
      title: "工同推廣",
      imgs: [sp4, sp5, sp6],
    },
  ]

  const toTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  return (
    <SponsorWrapper>
      <article>
        {sponsorList.map((entry, index) => (
          <SponsorSection key={index} title={entry.title} imgs={entry.imgs} />
        ))}
      </article>
      <ScrollUp onClick={toTop}>
        <img alt="arrow" src={arrowUp} />
        <p>to top</p>
      </ScrollUp>
      <p className="copyright">Copyright © 2022 ZHYTS All rights reserved.</p>
    </SponsorWrapper>
  )
}

const SponsorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  max-width: 1500px;
  margin: 0 auto;
  padding: 100px 0 700px;
  background-image: url(${fbg});
  background-position-x: center;
  background-position-y: 80vh;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  ${media.tablet`
    background-position-y:  bottom;
  `}
  ${media.mobile`
    padding: 100px 0 600px;
  `}
  .copyright {
    width:100%;
    position: absolute;
    bottom: 200px;
    text-align: center;
    color: #fff;
    font-size: 24px;
    font-family: Glory;
    ${media.mobile`
    font-size: 20px;
      bottom:100px;
  `}
  }
`
const ScrollUp = styled.div`
  position: absolute;
  bottom: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    margin-bottom: 10px;
    animation: float 2s ease-in-out infinite;
    @keyframes float {
      from {
        transform: translateY(0%);
      }
      50% {
        transform: translateY(-50%);
      }
      to {
        transform: translateY(0%);
      }
    }
  }
  p {
    font-family: "GenosBold";
    font-size: 30px;
    color: #00ffa2;
  }
`

export default Sponsor
