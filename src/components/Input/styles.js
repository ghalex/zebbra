import styled, { css } from 'styled-components'
import { fluid } from 'zebbra/utils'
import {
  space,
  color,
  fontSize,
  fontWeight,
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  height,
  style
} from 'styled-system'

const placeholderColor = style({
  prop: 'placeholderColor',
  cssProperty: 'color',
  key: 'colors'
})

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;

  & > .icon {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
  }

  ${space}
  ${fluid}
`

export const Input = styled.input`
  width: 100%;
  outline: 0 none;
  transition: all .3s;
  box-sizing: border-box;
  padding: 0 0.55em;
  line-height: 1.5;

  &:focus {
  }

  &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    ${placeholderColor}
  }

  ${p => p.hasIcon && css`padding-left: 2.20em;`}

  ${color}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
  ${fontSize}
  ${fontWeight}
  ${height}
  ${fluid}
`
