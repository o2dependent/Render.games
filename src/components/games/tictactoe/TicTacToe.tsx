import { motion } from "framer-motion"
import React, { useState } from "react"
import styled from "styled-components"
import useSound from "use-sound"
import TicTacToeHeader from "./TicTacToeHeader"
// @ts-ignore
import clickPop from "../../../sounds/clickPop.wav"

export default function TicTacToe() {
  // useSound
  const [playPop] = useSound(clickPop, { volume: 1 })
  // state
  // * tic tac toe board *
  const [board, setBoard] = useState(Array(9).fill(null))
  // * current player turn *
  const [player, setPlayer] = useState(1)
  // * game has been won *
  const [isGameWon, setIsGameWon] = useState(false)

  // --- functions ---
  // * end of turn function *
  const endTurn = newBoard => {
    // check if win condition is met
    const hasWon = checkForWin(newBoard)
    // if win condition met end game
    if (hasWon) {
      // end game
      setIsGameWon(true)
    } else {
      // change turn
      setPlayer(player === 1 ? 2 : 1)
    }
  }
  // * check for win condition *
  const checkForWin = newBoard => {
    let hasWon = false
    const plrSymbol = player === 1 ? "x" : "o"
    // if win return true
    // check rows
    for (let i = 0; i < 9; i += 3) {
      let counter = 0
      for (let j = 0; j < 3; j++) {
        if (newBoard[i + j] === plrSymbol) {
          counter++
        }
      }
      if (counter === 3) {
        return true
      }
    }
    // check columns
    for (let i = 0; i < 3; i++) {
      let counter = 0
      for (let j = 0; j < 9; j += 3) {
        if (newBoard[i + j] === plrSymbol) {
          counter++
        }
      }
      if (counter === 3) {
        return true
      }
    }
    // check diagonal
    if (
      (newBoard[0] === plrSymbol &&
        newBoard[4] === plrSymbol &&
        newBoard[8] === plrSymbol) ||
      (newBoard[2] === plrSymbol &&
        newBoard[4] === plrSymbol &&
        newBoard[6] === plrSymbol)
    ) {
      return true
    }
    // check if board is playable and reset if unplayable
    if (newBoard.every(tile => tile !== null)) {
      resetGame()
    }
    // else return false
    return false
  }
  // * handle tile click *
  const handleTileClick = idx => {
    if (isGameWon) {
      return
    }
    // check if tile is null
    if (board[idx] === null) {
      // if null change tile
      const newBoard = [...board]
      newBoard[idx] = player === 1 ? "x" : "o"
      setBoard(newBoard)
      // end turn
      endTurn(newBoard)
    } else {
      // else return without changing
      return
    }
  }
  // * reset game *
  const resetGame = () => {
    setIsGameWon(false)
    setBoard(Array(9).fill(null))
    setPlayer(1)
  }

  return (
    <TicTacToeWrapper>
      <TicTacToeHeader player={player} isGameWon={isGameWon} />
      <Board>
        {board.map((tile, idx) => (
          <Tile
            initial={{
              scale: 0.7,
              rotate: Math.random() * 100 - 50,
            }}
            animate={{
              scale: 1,
              rotate: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
            }}
            key={`${tile}${idx}`}
            onClick={() => {
              handleTileClick(idx)
              playPop()
            }}
            tile={tile}
            disabled={isGameWon || tile}
          />
        ))}
      </Board>
      {isGameWon && (
        <ResetButton
          initial={{
            scale: 0,
            rotate: -180,
          }}
          animate={{
            scale: 1,
            rotate: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
          }}
          winner={player}
          onClick={() => resetGame()}
        >
          Reset game
        </ResetButton>
      )}
    </TicTacToeWrapper>
  )
}

// --- styled components ---

const TicTacToeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  color: white;
  h1 {
    color: black;
    margin: 0 auto;
  }
  @media screen and (max-width: 600px) {
    width: 95%;
    max-height: 95%;
  }
`

const Board = styled.div`
  width: 500px;
  /* height: 500px; */
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  @media screen and (max-width: 600px) {
    width: 95%;
    max-height: 95%;
  }
`

const Tile = styled(motion.button)<{ tile: string }>`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  background-color: ${p =>
    p.tile === null
      ? "#00000050"
      : p.tile === "x"
      ? "var(--orange)"
      : "var(--purple)"};
  border-radius: 10%;

  &::after {
    content: "${p => p.tile}";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: clamp(1rem, 10vw, 6rem);
  }
`

const ResetButton = styled(motion.button)<{ winner: number }>`
  display: block;
  font-size: 1.25rem;
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 10px;
  margin: 0 auto;
  background-color: var(--${p => (p.winner === 1 ? "orange" : "purple")});
`
