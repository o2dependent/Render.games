import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import NavProtector from "../navProtector"

export default function MobileNav({ toggleDarkMode }) {
  // --- hooks ---
  // state
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <>
      <Nav>
        <MenuButton
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg>
        </MenuButton>
      </Nav>
      <LinkContainer isNavOpen={isNavOpen}>
        <NavProtector type="main" />
        <NavLinkContainer>
          <NavLink to="/">Render.games</NavLink>
        </NavLinkContainer>
        <NavLinkContainer>
          <NavLink to="/games">Games</NavLink>
        </NavLinkContainer>
      </LinkContainer>
    </>
  )
}

// --- styled components ---
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3.75rem;
  padding: 1rem;

  @media (min-width: 768px) {
    display: none;
  }
`

const LinkContainer = styled.div<{ isNavOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 10;
  top: 0;
  position: fixed;
  padding: 1rem;
  background-color: var(--gray-200);
  overflow: hidden;

  opacity: ${p => (p.isNavOpen ? "1" : "0")};
  transform: ${p => (p.isNavOpen ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 750ms ease, opacity 750ms ease;

  @media (min-width: 768px) {
    display: none;
  }
`

const NavLinkContainer = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  font-weight: 500;
  border-bottom-width: 2px;
  border-color: var(--gray-400);
  font-size: 1.875rem;
  line-height: 2.25rem;
`

const NavLink = styled(Link)`
  width: 100%;
  height: 100%;
  vertical-align: middle;
`

const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--gray-200);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9999px;
  transition: transform 250ms ease;
`
