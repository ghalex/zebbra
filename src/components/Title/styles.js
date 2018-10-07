import styled, { css } from 'styled-components'
import {
  fontFamily,
  fontSize,
  fontWeight,
  space,
  color,
  textAlign,
  display
} from 'styled-system'

export const StyledTitle = styled.div`
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;

  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${space}
  ${color}
  ${textAlign}
  ${display}

  ${p => p.thin && css`font-weight: 200`};
  ${p => p.strong && css`font-weight: 800`};
  ${p => p.textTransform && css`text-transform: ${p.textTransform}`}
`
