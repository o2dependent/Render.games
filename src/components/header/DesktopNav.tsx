import { AnimatePresence, motion } from "framer-motion"
import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import mixins from "../../helpers/mixins"

export default function DesktopNav() {
  // --- hooks ---
  const [isGamesHovered, setIsGamesHovered] = useState(false)
  // --- variants ---
  const GamesMenuVariant = {
    initial: { scaleY: 0, transformOrigin: "top" },
    animate: {
      scaleY: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
    },
  }
  const GamesLinkVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }
  return (
    <Container>
      <DesktopLinkContainer>
        <NavHomeLink>
          <Link to="/">Render.games</Link>
        </NavHomeLink>
        <NavLink
          onFocus={() => setIsGamesHovered(true)}
          onBlur={() => setIsGamesHovered(false)}
          onMouseEnter={() => setIsGamesHovered(true)}
          onMouseLeave={() => setIsGamesHovered(false)}
        >
          <Link to="/games">Games</Link>
          <motion.svg
            style={{ cursor: "pointer" }}
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
          >
            <path d="M1 1L6 6L11 1" stroke="black" stroke-linejoin="round" />
          </motion.svg>
          <AnimatePresence>
            {isGamesHovered && (
              <>
                <GameMenuSafeArea />
                <GameMenu
                  variants={GamesMenuVariant}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {["Tic Tac Toe", "Render Snake", "Rendero"].map(name => (
                    <GameLink
                      initial={{ scale: 0.95 }}
                      whileHover={{ scale: 1 }}
                      variants={GamesLinkVariant}
                      to="/"
                    >
                      {name}
                    </GameLink>
                  ))}
                </GameMenu>
              </>
            )}
          </AnimatePresence>
        </NavLink>
      </DesktopLinkContainer>
    </Container>
  )
}

// --- styled components ---
const Container = styled.nav`
  ${mixins.container}
  height: 100%;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  padding: 0 1rem;
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`

const NavHomeLink = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`

const NavLink = styled.h3`
  position: relative;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  gap: 0.25rem;
  z-index: 10;
`

const GameMenu = styled(motion.div)`
  border-radius: 0.5rem;
  background-color: white;
  position: absolute;
  top: 100%;
  left: 75%;
  width: 15rem;
  padding: 0.5rem;
  display: grid;
  filter: drop-shadow(0px 2px 5px #00000040);

  &::before {
    --size: 0.5rem;
    content: "";
    position: absolute;
    top: -0.25rem;
    left: 0.75rem;
    transform: rotate(45deg);
    width: var(--size);
    height: var(--size);
    background-color: white;
  }
`

const GameLink = styled(motion(Link))``

const GameMenuSafeArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 500%;
  height: 10rem;
  z-index: -1;
`

const DesktopLinkContainer = styled.div`
  display: flex;
  column-gap: 1rem;
  height: 100%;
  align-items: flex-end;
`

const DesktopButtonContainer = styled.div`
  display: flex;
  height: 100%;
  column-gap: 1rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  align-items: center;
`
