import styled, { css } from 'styled-components'
import { hover } from 'zebbra/utils'
import {
  fontSize,
  fontFamily,
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  color,
  space
} from 'styled-system'

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: transparent;
  box-sizing: border-box;

  ${fontFamily}
  ${space}
`

export const CheckboxIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  ${p => p.hasChildren && css`margin-right: 0.5em;`}

  ${color}
  ${fontSize}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
  ${hover}

  ${p => !p.checked && css`
    & .icon {
      opacity: 0.2;
    }
  `}
`

export const CheckboxLabel = styled.div`
  margin-left: 0.5em;
`
