import styled, { css } from 'styled-components'
import { color, space, boxShadow, borders, borderRadius, borderColor } from 'styled-system'
// import { isSize, textOnColor, color, px, getTheme } from '@zebbra/utils'

const stacked = p => {
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

export const Box = styled.div`
  position: relative;
  text-align: left;

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }

  ${color}
  ${space}
  ${stacked}
  ${boxShadow}
  ${borders}
  ${borderRadius}
  ${borderColor}
`
