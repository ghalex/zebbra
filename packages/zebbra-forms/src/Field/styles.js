import styled from 'styled-components'

export const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${p => p.align};

  & > label {
    margin-bottom: 0.5em !important;
    font-weight: 500;
  }

  & > div {
    position: relative;
  }

  &:not(:last-child) {
    margin-bottom: 1.0rem;
  }
`
