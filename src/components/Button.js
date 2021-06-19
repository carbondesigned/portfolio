import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Button = ({ children, primary, to, style, round }) => {
  return (
    <StyledButton style={style} to={to} round={round} primary={primary}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled(Link)`
  color: ${(p) => (p.primary ? "#F9F8F8" : p.round ? "#F9F8F8" : "#353535")};
  background-color: ${(p) =>
    p.primary ? "#00A3E4" : p.round ? "#00A3E4" : "transparent"};
  border-radius: ${(p) => (p.primary ? "5em" : p.round ? "0.5em" : "0em")};
  padding: 1em 2em;
  text-decoration: none;
  transition: 300ms;
  box-shadow: ${(p) =>
    p.primary || p.round
      ? `0 2.8px 2.2px rgba(0, 0, 0, 0.042),
    0 6.7px 5.3px rgba(0, 0, 0, 0.061), 0 12.5px 10px rgba(0, 0, 0, 0.075),
    0 22.3px 17.9px rgba(0, 0, 0, 0.089),
    0 41.8px 33.4px rgba(0, 163, 228, 0.15), 0 100px 80px rgba(0, 0, 0, 0.15)`
      : "none"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  white-space: nowrap;
  font-size: clamp(0.725em, 3vw, 0.95em);

  &:hover,
  &:focus {
    background-color: ${(p) =>
      p.primary ? "#008ac0" : p.round ? "#008ac0" : "transparent"};
    color: ${(p) => (p.primary ? "#F9F8F8" : p.round ? "#F9F8F8" : "#008ac0")};
    box-shadow: ${(p) =>
      p.primary || p.round
        ? `0 2.8px 2.2px rgba(0, 0, 0, 0.051),
      0 6.7px 5.3px rgba(0, 0, 0, 0.073), 0 12.5px 10px rgba(0, 0, 0, 0.09),
      0 22.3px 17.9px rgba(0, 0, 0, 0.107), 0 41.8px 33.4px rgba(0, 0, 0, 0.129),
      0 100px 80px rgba(0, 163, 228, 0.2)`
        : "none"};
  }
`

export default Button