import styled, { css } from 'styled-components'
import { color, textOnColor, isSize } from '@zebbra/utils'
import { rgba } from 'polished'

const isInverted = p => {
  if (!p.inverted) return
  return css`
    background-color: ${p => color(p)};
    color: ${p => textOnColor(color(p))};
  `
}

const isCircular = p => {
  if (!p.circular) return
  return css`
    border-radius: 999px;
  `
}

const hasShadow = p => {
  if (!p.shadow) return
  return css`
    box-shadow: 0 0 0 0.18em ${rgba(color(p), 0.3)};
    margin: 0.185em;
  `
}

export const Icon = styled.i`
  display: inline-flex !important;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: ${p => p.theme.components.icon(p).width};
  height: ${p => p.theme.components.icon(p).height};
  line-height: 1;

  ${p => p.color && css`color: ${p => color(p)};`}
  ${isInverted}
  ${isCircular}
  ${isSize}
  ${hasShadow}
`
