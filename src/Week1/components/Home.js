import React from "react"
import styled from "styled-components"
import ground from "../images/ground.png"
import ball from "../images/ball.png"
import arrowDown from "../images/arrow_down.png"
import Particles from "react-particles"
import media from "../../lib/mediaQuery"

const Home = () => {
  const particlesProps = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false,
          value_area: 800,
        },
      },
      color: {
        value: "#00ffa2",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.3,
          sync: true,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "grab",
        },
        onclick: {
          enable: false,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  }
  return (
    <HomeWrapper>
      <Particles options={particlesProps} />
      <Ball>
        <div className="title">
          <div className="primary">
            <p className="lower">The F2E 5th</p>
            <p className="upper">The F2E 5th</p>
          </div>
          <div className="secondary">
            <p>互動式網頁設計</p>
          </div>
        </div>
      </Ball>
      <ScrollDown>
        <img alt="arrow" src={arrowDown} />
        <p>scroll down</p>
      </ScrollDown>
    </HomeWrapper>
  )
}
const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${ground}) no-repeat;
  background-position: center bottom;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Ball = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  max-height: 747px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${ball}) no-repeat;
  background-position: center;
  background-size: contain;
  .title {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .primary {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "GenosBold";
      font-size: 120px;
      ${media.tablet`
        font-size: 100px;
      `}
      ${media.mobile`
        font-size: 60px;
      `}
      p {
        position: absolute;
        &.upper {
          color: #fff;
        }
        &.lower {
          margin: 10px 0 0 10px;
          color: transparent;
          -webkit-text-stroke: 1px #00ffa2;
        }
      }
    }
    .secondary {
      margin-top: 60px;
      p {
        font-size: 36px;
        font-weight: bold;
        color: #fff;
      }
    }
  }
`

const ScrollDown = styled.div`
  position: absolute;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
export default Home
