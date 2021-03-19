import * as React from "react"
import { Link } from "gatsby"

import SEO from "../../components/seo"
import styled from "styled-components"
import GameCard from "../../components/GameCard"
import mixins from "../../helpers/mixins"
import { graphql } from "gatsby"

export const query = graphql`
  query GamesInfo {
    allMdx {
      edges {
        node {
          frontmatter {
            photo
            title
          }
          slug
        }
      }
    }
  }
`

const IndexPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const games = edges.map(e => e.node)
  console.log(games)
  return (
    <>
      <SEO title="Home" />
      <Grid>
        {games.map(game => (
          <GameCard to={game.slug} title={game.frontmatter.title} />
        ))}
      </Grid>
    </>
  )
}

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
