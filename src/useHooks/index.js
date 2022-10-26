import { useEffect, useState } from "react"

export const useTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title || prevTitle
    return () => {
      document.title = prevTitle
    }
  })
}

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}
