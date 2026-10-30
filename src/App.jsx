import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import StartHere from "./Components/StartHere"
import About from "./Components/About"
import Services from "./Components/Services"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="academic">
      <Navbar />
      <Hero />
      <StartHere />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
