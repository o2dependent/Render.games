import * as React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import styled from "styled-components"
import GameCard from "../components/GameCard"
import NavProtector from "../components/navProtector"
import mixins from "../helpers/mixins"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Grid>
      {[{ title: "Tic Tac Toe", to: "tictactoe" }].map(game => (
        <GameCard to={game.to} title={game.title} />
      ))}
    </Grid>
  </>
)

export default IndexPage

// --- styled components ---
const Grid = styled.div`
  ${mixins.container}
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(475px, 1fr));
  }
  margin-bottom: 2rem;
`
