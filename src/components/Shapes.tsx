import { motion, useTransform, useViewportScroll } from "framer-motion"
import React from "react"
import styled from "styled-components"

export default function Shapes() {
  // --- Variables ---
  const ShapeArr: (() => JSX.Element)[] = [
    Circle,
    Hexagon,
    Square,
    Triangle,
    ThickCircle,
  ]
  // --- hooks ---
  const { scrollYProgress } = useViewportScroll()
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <Container style={{ y: y }}>
      {ShapeArr.map(el => (
        <ShapeBox>{el()}</ShapeBox>
      ))}
    </Container>
  )
}

// --- styled components ---
const Container = styled(motion.div)`
  position: fixed;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    height: 150vh;
  }
`

const ShapeBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  &:nth-of-type(2n) {
    justify-content: flex-end;
  }
  &:last-of-type {
    justify-content: center;
  }
`

// --- All Shapes ---
const Circle = () => (
  <motion.svg
    animate={{
      rotate: [0, 39, 50, -180, 0],
      x: [0, 15, -39, 0],
      y: [0, -20, 50, -50, 180, 0],
    }}
    transition={{ repeat: Infinity, duration: 60 }}
    xmlns="http://www.w3.org/2000/svg"
    width="240"
    height="240"
    viewBox="0 0 240 240"
    fill="none"
  >
    <circle
      cx="120"
      cy="120"
      r="104"
      stroke="#64DFDF"
      stroke-opacity="0.5"
      strokeWidth="32"
    />
  </motion.svg>
)

const ThickCircle = () => (
  <motion.svg
    animate={{
      rotate: [0, 39, 50, -180, 0],
      x: [0, 15, -39, 0],
      y: [0, -20, 50, -50, 180, 0],
    }}
    transition={{ repeat: Infinity, duration: 60, repeatType: "mirror" }}
    xmlns="http://www.w3.org/2000/svg"
    width="180"
    height="180"
    viewBox="0 0 180 180"
    fill="none"
  >
    <circle
      cx="90"
      cy="90"
      r="70"
      stroke="#6930C3"
      stroke-opacity="0.5"
      strokeWidth="24"
    />
  </motion.svg>
)

const Hexagon = () => (
  <motion.svg
    animate={{
      rotate: [0, -39, 50, 180, 0],
      x: [0, 45, -80, 0],
      y: [0, 25, 145, -20, 10, 0],
    }}
    transition={{ repeat: Infinity, duration: 60, repeatType: "mirror" }}
    xmlns="http://www.w3.org/2000/svg"
    width="251"
    height="261"
    viewBox="0 0 251 261"
    fill="none"
  >
    <path
      d="M80.2213 52L170.984 52L216.365 130.603L170.984 209.205L80.2213 209.205L34.8401 130.603L80.2213 52Z"
      stroke="#FF3D78"
      stroke-opacity="0.5"
      strokeWidth="16"
    />
  </motion.svg>
)

const Triangle = () => (
  <motion.svg
    animate={{
      rotate: [0, 39, 50, -180, 0],
      x: [0, 15, -39, 0],
      y: [0, -20, 50, -50, 180, 0],
    }}
    transition={{ repeat: Infinity, duration: 60, repeatType: "mirror" }}
    xmlns="http://www.w3.org/2000/svg"
    width="191"
    height="191"
    viewBox="0 0 191 191"
    fill="none"
  >
    <path
      d="M13 183L95.5 18L178 183H13Z"
      stroke="#80FFDB"
      stroke-opacity="0.5"
      strokeWidth="16"
    />
  </motion.svg>
)

const Square = () => (
  <motion.svg
    animate={{
      rotate: [0, -39, 50, 180, 0],
      x: [0, -15, 39, 0],
      y: [0, -20, 39, 20, -80, 0],
    }}
    transition={{ repeat: Infinity, duration: 60, repeatType: "mirror" }}
    xmlns="http://www.w3.org/2000/svg"
    width="123"
    height="123"
    viewBox="0 0 123 123"
    fill="none"
  >
    <rect
      x="9.79796"
      y="31.5388"
      width="84"
      height="84"
      transform="rotate(-15 9.79796 31.5388)"
      stroke="#FF8156"
      stroke-opacity="0.5"
      strokeWidth="16"
    />
  </motion.svg>
)
