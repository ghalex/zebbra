import styled from 'styled-components'
import { color, size, px } from 'helpers'
import { rgba, darken } from 'polished'

export const StyledInput = styled.div`
  display: flex;
  width: 100%;

  & > input {
      width: 100%;
      height: ${p => p.theme.components.input.height};
      font-family: ${p => p.theme.fonts.primary};
      font-weight: 400;
      margin: 0;
      padding: 0 0.55rem;
      outline: 0 none;
      border: ${p => p.theme.components.input.border};
      border-radius: ${p => px(p.theme.components.input.borderRadius)};
      box-shadow: ${p => p.theme.components.input.boxShadow};
      transition: all .3s;
      font-size: ${p => px(size(p))};
      border-color: ${p => color(p)};
      background: ${p => p.color ? rgba(color(p), 0.3) : 'white'};
      box-sizing: border-box;

      &::-webkit-input-placeholder {
        color: ${p => p.color ? color(p) : 'gray'};
      }
  }

  & > input:focus {
    border: ${p => p.theme.components.input.focusBorder};
    border-color: ${p => p.color ? darken(0.1, color(p)) : p.theme.colors.primary};
    box-shadow: ${p => p.theme.components.input.focusBoxShadow};
  }

  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`
