import { useEffect, useState } from 'react'

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

const getStepsPosition = () => {
  const step = document.getElementById('step')
  return step?.getBoundingClientRect().top
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export function useGetStepsTop() {
  const [top, setTop] = useState(
    getWindowDimensions().height - getStepsPosition()
  )
  const root = document.getElementById('root')

  useEffect(() => {
    function handleWheel() {
      setTop(getWindowDimensions().height - getStepsPosition())
    }
    handleWheel()
    window.addEventListener('scroll', handleWheel)
    return () => {
      window.removeEventListener('scroll', handleWheel)
    }
  }, [root])

  return top
}

export function useScrollTop() {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const handleScrollTop = () => {
      setScrollTop(document.documentElement.scrollTop)
    }
    window.addEventListener('scroll', handleScrollTop)
    handleScrollTop()

    return () => window.removeEventListener('scroll', handleScrollTop)
  }, [])
  return scrollTop
}
