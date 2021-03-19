import React, { useEffect } from "react"
import styled from "styled-components"
import useSound from "use-sound"
import darkPop from "../../sounds/darkPop.wav"
import lightPop from "../../sounds/lightPop.wav"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

const Header = () => {
  // --- hooks ---
  // useSound
  const [playDark] = useSound(darkPop, { volume: 0.25 })
  const [playLight] = useSound(lightPop, { volume: 0.25 })

  // check for dark mode
  useEffect(() => {
    if (
      localStorage.getItem("dark") === "dark" ||
      (localStorage.getItem("dark") !== "light" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.body.classList.add("dark")
    }
  }, [])
  // --- functions ---
  const toggleDarkMode = () => {
    const isBodyDark = document.body.classList.contains("dark")
    document.body.classList.toggle("dark")
    if (isBodyDark) {
      localStorage.setItem("dark", "light")
      playLight()
    } else {
      localStorage.setItem("dark", "dark")
      playDark()
    }
  }

  return (
    <HeaderContainer>
      {/* --- desktop --- */}
      <DesktopNav toggleDarkMode={toggleDarkMode} />
      {/* --- mobile --- */}
      <MobileNav toggleDarkMode={toggleDarkMode} />
    </HeaderContainer>
  )
}

export default Header

// --- styled components ---
const HeaderContainer = styled.header`
  width: 100%;
  z-index: 20;
  top: 0;
  position: sticky;
  height: 3.75rem;
  @media screen and (min-width: 768px) {
    background-color: white;
    box-shadow: 0px 2px 5px #00000030;
  }
`
