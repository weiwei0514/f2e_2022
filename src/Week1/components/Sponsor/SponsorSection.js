import React from 'react'
import styled from 'styled-components'
import media from 'lib/mediaQuery'

/**
 * 贊助商標題 + 圖片
 *
 * @param {{
 * title: string,
 * imgs: Array
 * }} props -
 * - title 區塊標題
 * - imgs 圖片群組
 * @returns {JSX.Element} 贊助商標題 + 圖片
 */
const SponsorSection = (props) => {
  const { title, imgs } = props

  return (
    <SectionWrapper>
      <h6>{title}</h6>
      <div className="imgs">
        {imgs.map((img, k) => (
          <div key={k} className="img">
            <img alt="sponsor" src={img} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  margin: 0 auto;
  :not(:first-child) {
    margin-top: 150px;
  }
  h6 {
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 70px;
  }
  .imgs {
    display: flex;
    justify-content: space-around;
    width: 100%;
    ${media.tablet`
      flex-direction:column;
      align-items:center;
    `}
  }
  .img {
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    ${media.tablet`
      margin-bottom:50px;
    `}
  }
`

export default SponsorSection
