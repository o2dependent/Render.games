import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import styled from "styled-components"
import mixins from "../helpers/mixins"
import Shapes from "./Shapes"

const Layout = ({ children }) => (
  <LayoutContainer>
    <Header />
    <Shapes />
    <Main>{children}</Main>
    <Footer>
      <FooterContainer>
        <Copr>© {new Date().getFullYear()}, Handcrafted by Ethan Olsen</Copr>
      </FooterContainer>
    </Footer>
  </LayoutContainer>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// --- styled components ---

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  z-index: 10;
  padding: 2.5rem 0;
`

const Footer = styled.footer`
  padding-top: 1rem;
  padding-bottom: 1rem;
`

const FooterContainer = styled.div`
  ${mixins.container}
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  height: 100%;
`

const Copr = styled.p`
  margin: 0 auto;
  color: var(--gray-400);
`
