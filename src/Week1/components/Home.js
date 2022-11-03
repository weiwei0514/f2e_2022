import React from "react"
import styled from "styled-components"
import ground from "../images/ground.png"
import ball from "../images/ball.png"
import Particles from "react-particles"
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
        <img className="earth" alt="earth" src={ball} />
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
    </HomeWrapper>
  )
}
const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${ground}) no-repeat;
  background-position: center bottom;
`
const Ball = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .earth {
    width: 100%;
    max-width: 740px;
  }
  .title {
    position: absolute;
    width: 100%;
    height: 100%;
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
export default Home
