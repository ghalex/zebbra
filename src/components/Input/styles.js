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
  themeGet,
  height
} from 'styled-system'

export const InputContainer = styled.div`
  display: flex;
  position: relative;

  & > .icon {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
  }

  &:not(:last-child) {
    margin-bottom: 0.75rem;
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

  &:focus {
  }

  &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    ${p => p.placeholderColor && css`color: ${themeGet('colors.' + p.placeholderColor, p.placeholderColor)}`}
  }

  ${p => p.hasIcon && css`padding-left: 2.20em;`}

  ${color}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
  ${fontSize}
  ${height}
  ${fontWeight}
`
