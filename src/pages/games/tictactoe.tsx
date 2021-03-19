import React from "react"
import styled from "styled-components"
import TicTacToe from "../../components/games/tictactoe/TicTacToe"

export default function tictactoe() {
  return (
    <CenterContent>
      <TicTacToe />
    </CenterContent>
  )
}

// --- styled components ---
const CenterContent = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
`
