import styled, { css } from 'styled-components'
import { isSize, textOnColor, color, px } from '@zebbra/utils'

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

const isColor = p => {
  if (!p.color || p.inverted) return

  return css`
    background-color: ${color};
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

const hasSpace = p => {
  if (!p.space) return
  return css`
    > *:not(:first-child):not(:last-child) { margin: ${p.space} }
  `
}

export const Box = styled.div.attrs({
  static: 'true',
  box: p => ({...p.theme.components.box})
})`
  position: relative;
  font-family: ${p => p.theme.fonts.primary};
  border: ${p => p.box.border};
  border-radius: ${p => px(p.box.borderRadius)};
  box-shadow: ${p => p.box.boxShadow};
  padding: ${p => p.padding};
  background-color: white;
  text-align: left;

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }

  ${isSize}
  ${isStacked}
  ${isColor}
  ${isInverted}
  ${hasSpace}
`
