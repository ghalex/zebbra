import styled, { css } from 'styled-components'
import { flexbox, borders } from 'zebbra/utils'
import {
  color,
  space,
  boxShadow,
  fontFamily,
  fontSize,
  style,
  textAlign
} from 'styled-system'

const stacked = p => {
  if (!p.stacked) return

  return css`
    padding-bottom: 1.2em;
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: -1px;
      right: -1px;
      border-top: 1px solid rgba(34,36,38,.15);
      background: rgba(0,0,0,.03);
      height: 6px;
      visibility: visible;
      background: rgba(255, 255, 255, 0.39);
      box-shadow: 0 1px 3px rgba(10,10,10,0.1) inset;
    }
  `
}

const boxStyles = style({
  prop: 'variant',
  cssProperty: 'borderTop',
  key: 'colors',
  transformValue: n => `2px solid ${n}`
})

export const Box = styled.div`
  position: relative;

  ${fontFamily}
  ${fontSize}
  ${space}
  ${stacked}
  ${boxShadow}
  ${color}
  ${borders}
  ${boxStyles}
  ${textAlign}
  ${flexbox}
`
