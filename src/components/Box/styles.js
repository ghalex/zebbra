import styled, { css } from 'styled-components'
import { flexbox, borders } from 'zebbra/utils'
import {
  color,
  space,
  boxShadow,
  fontFamily,
  fontSize,
  style,
  textAlign,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight
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

const borderTopColor = style({
  prop: 'borderTopColor',
  cssProperty: 'borderTopColor',
  key: 'colors'
})

const borderBottomColor = style({
  prop: 'borderBottomColor',
  cssProperty: 'borderBottomColor',
  key: 'colors'
})

export const StyledBox = styled.div`
  display: flex;
  position: relative;

  ${fontFamily}
  ${fontSize}
  ${space}
  ${stacked}
  ${boxShadow}
  ${color}
  ${borders}
  ${borderTopColor}
  ${borderBottomColor}
  ${textAlign}
  ${flexbox}
  ${maxWidth}
  ${minWidth}
  ${maxHeight}
  ${minHeight}
`
