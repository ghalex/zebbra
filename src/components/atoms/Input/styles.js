import styled from 'styled-components'
import { size } from 'helpers'

export const StyledInput = styled.div`
  display: flex;
  margin-bottom: 1rem;

  & > input {
      width: 100%;
      height: ${p => p.theme.components.input.height};
      font-family: ${p => p.theme.fonts.primary};
      font-weight: 400;
      background: white;
      margin: 0;
      padding: 0 0.55rem;
      outline: 0 none;
      border: ${p => p.theme.components.input.border};
      border-radius: ${p => p.theme.components.input.borderRadius};
      box-shadow: ${p => p.theme.components.input.boxShadow};
      transition: all .3s;
      font-size: ${p => size(p)};
  }

  & > input:focus {
    border: ${p => p.theme.components.input.focusBorder};
    box-shadow: ${p => p.theme.components.input.focusBoxShadow};
  }
`
