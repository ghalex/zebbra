import styled, { css } from 'styled-components'
import { color, textOnColor, size } from 'helpers'

const isColor = p => {
  if (!p.color || p.inverted) return

  return css`
    border: none;
    background-color: ${p => color(p)};
    color: ${p => textOnColor(color(p))};
  `
}

const isInverted = p => {
  if (!p.color || !p.inverted) return

  return css`
    background-color: white;
    border-top: 2px solid ${color};
  `
}

const isStacked = p => {
  if (!p.stacked) return

  return css`
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      border-top: 1px solid rgba(34,36,38,.15);
      background: rgba(0,0,0,.03);
      width: 100%;
      height: 6px;
      visibility: visible;
      background: rgba(255, 255, 255, 0.39);
      box-shadow: 0 1px 3px rgba(10,10,10,0.1) inset;
    }
  `
}

export const StyledBox = styled.div`
  position: relative;
  font-family: ${p => p.theme.fonts.primary};
  font-size: ${p => size(p)};
  border: ${p => p.theme.components.box.border};
  border-radius: ${p => p.theme.components.box.radius};
  box-shadow: ${p => p.theme.components.box.boxShadow};
  padding: ${p => p.padding};
  background-color: white;

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }

  ${isStacked}
  ${isInverted}
  ${isColor}
`
