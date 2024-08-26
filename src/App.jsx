import { BrowserRouter, Route, Routes } from "react-router-dom"
import Hero from "./components/Hero"
import Skill from "./components/Skill"
import HeroTest from "./components/test"
import Testing from "./components/testing"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/test" element={<HeroTest />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
