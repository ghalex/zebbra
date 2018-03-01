import styled, { css } from 'styled-components'
import { size, color, textOnColor, px } from 'helpers'
import is from 'styled-is'

const isInverted = p => {
  if (!p.inverted) return
  return css`
    background-color: ${p => color(p)};
    color: ${p => textOnColor(color(p))};
  `
}

export const StyledIcon = styled.i`
  display: inline-flex !important;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: ${p => p.theme.components.icon.width};
  height: ${p => p.theme.components.icon.height};
  line-height: 1.5;
  font-size: ${p => px(size(p))};

  ${is('color')`color: ${p => color(p)};`}
  ${isInverted}
`
