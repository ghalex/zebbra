import styled from 'styled-components'
import { fontFamily, alignItems } from 'styled-system'

export const StyledField = styled.div`
  display: flex;
  flex-direction: column;

  & > label {
    margin-bottom: 0.5em !important;
    font-weight: 500;
  }

  & > label span {
    color: red;
  }

  & > div {
    position: relative;
  }

  &:not(:last-child) {
    margin-bottom: 1.0rem;
  }

  ${fontFamily}
  ${alignItems}
`
