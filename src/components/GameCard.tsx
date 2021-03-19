import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { motion } from "framer-motion"

export default function GameCard({ to, title }: { to: string; title: string }) {
  return (
    <Card.Body
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      to={`/games/${to}`}
    >
      <Card.Img
        src="https://images.unsplash.com/photo-1615996923925-bfe3ab919361?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
        alt={`${title} image`}
      />
      <Card.Title>{title}</Card.Title>
    </Card.Body>
  )
}

const Card = {
  Body: styled(motion(Link))`
    width: 100%;
    height: auto;
    background-color: white;
    border: 0.5rem solid white;
    border-radius: 0.5rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 250ms ease;

    &:hover {
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.35);
    }
  `,
  Img: styled.img`
    width: 100%;
  `,
  Title: styled.h3`
    width: 100%;
    font-size: 1.375rem;
    font-weight: 500;
  `,
}
