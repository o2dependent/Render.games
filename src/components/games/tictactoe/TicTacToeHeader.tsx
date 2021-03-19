import { motion } from "framer-motion"
import React, { useRef, useState } from "react"
import styled from "styled-components"
import useOnClickOutside from "../../../hooks/useOnClickOutside"

export default function TicTacToeHeader({ isGameWon, player }) {
  // --- hooks ---
  // state
  const [playerNames, setPlayerNames] = useState([`Player 1`, `Player 2`])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newNames, setNewNames] = useState([`Player 1`, `Player 2`])
  // ref
  const modalRef = useRef(null)
  // click outside
  useOnClickOutside(modalRef, () => setIsModalOpen(false))

  // --- functions ---
  const handleNameChange = () => {
    setPlayerNames(newNames)
    setNewNames(newNames)
    setIsModalOpen(false)
  }

  return (
    <HeaderContainer>
      {isModalOpen ? (
        <ModalBackground>
          <Modal ref={modalRef}>
            <h3>Choose new names</h3>
            <form onSubmit={handleNameChange}>
              <NameInput
                name="player1"
                value={newNames[0]}
                placeholder="Player 1"
                onChange={e => setNewNames([e.target.value, newNames[1]])}
              />
              <NameInput
                name="player2"
                value={newNames[1]}
                placeholder="Player 2"
                onChange={e => setNewNames([newNames[0], e.target.value])}
              />
              <NameButton type="submit" onClick={handleNameChange}>
                Change names
              </NameButton>
            </form>
          </Modal>
        </ModalBackground>
      ) : null}
      {isGameWon ? (
        <Header>Player{" " + player} has won!</Header>
      ) : (
        <Header>
          {`${playerNames[Number(player) - 1]}'s turn  `}
          <EditSpan onClick={() => setIsModalOpen(true)}>✎</EditSpan>
        </Header>
      )}
    </HeaderContainer>
  )
}

// --- styled components ---

const HeaderContainer = styled.div`
  margin-top: 25px;
`

const EditSpan = styled(motion.button)`
  font-size: 32px;
  &:hover {
    cursor: pointer;
  }
`

const Header = styled.h1`
  width: 100%;
  text-align: center;
`

const ModalBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 9999;
  background-color: #00000080;
`

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 95%;
  max-width: 500px;
  border-radius: 10px;
  padding: 1rem;
  background-color: white;
  color: black;
  font-size: 1.5rem;
  h3 {
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 15px;
  }
`

const NameInput = styled.input`
  width: 100%;
  padding: 10px 5px;
  border: none;
  margin-bottom: 15px;
  border-radius: 10px;
  background-color: #00000020;
  font-size: 1.15rem;
`

const NameButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: none;
  font-size: 1.15rem;
  &&& {
    color: white;
  }
  background-color: var(--red);
`
