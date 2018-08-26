import styled from 'styled-components'
import { borders } from 'zebbra/utils'
import {
  color,
  space,
  boxShadow,
  fontFamily,
  fontSize,
  fontWeight,
  style
} from 'styled-system'

const placeholderColor = style({
  prop: 'placeholderColor',
  cssProperty: 'color',
  key: 'colors'
})

export const StyledTextarea = styled.textarea`
  transition: all .3s;
  font-weight: 400;
  background: white;
  margin: 0;
  outline: 0 none;
  display: block;
  max-width: 100%;
  min-width: 100%;
  padding: 0.625em;
  resize: vertical;
  box-sizing: border-box;
  appearance: none;

  &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    ${placeholderColor}
  }

  ${color}
  ${space}
  ${borders}
  ${boxShadow}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
`
