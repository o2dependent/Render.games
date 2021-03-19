import React from "react"
import styled from "styled-components"

type I_Type = "main" | "accent"

type I_NavProtectorProps = { type: I_Type }

export default function NavProtector({ type }: I_NavProtectorProps) {
  // --- functions ---
  const typeSwitch = () => {
    switch (type) {
      case "main":
        return <MainProtector />
      case "accent":
        return <AccentProtector />
    }
  }

  return <>{typeSwitch()}</>
}

// --- styled components ---
const Protector = styled.div`
  width: 100%;
  position: sticky;
  top: -1px;
  height: 3.75rem;
  z-index: 10;
`

const MainProtector = styled(Protector)`
  background-color: var(--gray-200);
`

const AccentProtector = styled(Protector)`
  background-color: white;
`
