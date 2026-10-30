import React from "react"
import Sidebar from "./Components/Sidebar"
import Profile from "./Components/Profile"
import Contact from "./Components/Contact"

function App() {
  return (
    <div className="optb">
      <Sidebar />
      <main className="optb-main">
        <Profile />
        <div className="optb-contact">
          <Contact />
        </div>
        <p className="optb-copy">&copy; 2026 Paul Mburu. All rights reserved.</p>
      </main>
    </div>
  )
}

export default App
