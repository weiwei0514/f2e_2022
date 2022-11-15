import React from "react"
import { Routes, Route } from "react-router-dom"
// components
import Week1 from "./Week1"
import Week2 from "./Week2"
import Week3 from "./Week3"
const RouterView = () => {
  return (
    <Routes>
      <Route path="f2e_2022/week1" element={<Week1 />} />
      <Route path="f2e_2022/week2" element={<Week2 />} />
      <Route path="f2e_2022/week3" element={<Week3 />} />
      <Route path="*" element={<Week1 />} />
    </Routes>
  )
}

export default RouterView
