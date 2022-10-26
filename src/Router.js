import React from "react"
import { Routes, Route } from "react-router-dom"
// components
import Week1 from "./Week1"
import Week2 from "./Week2"
import Week3 from "./Week3"
const RouterView = () => {
  return (
    <Routes>
      <Route path="/week1" element={<Week1 title={"The F2E 活動網站設計"}/>} />
      <Route path="/week2" element={<Week2 title={"今晚，我想來點點簽"}/>} />
      <Route path="/week3" element={<Week3 title={"Scrum 新手村"}/>} />
    </Routes>
  )
}

export default RouterView
