import styled, { css } from 'styled-components'
import { color, px, isSize } from '@zebbra/utils'
import { rgba } from 'polished'

export const Input = styled.div`
  display: flex;
  width: 100%;
  position: relative;

  & > input {
      width: 100%;
      height: ${p => p.theme.components.input.height};
      font-family: ${p => p.theme.fonts.primary};
      font-weight: 400;
      margin: 0;
      padding: 0 0.55rem;
      outline: 0 none;
      border: ${p => p.theme.components.input.border};
      border-color: ${p => p.color ? color(p) : p.theme.components.input.borderColor};
      border-radius: ${p => px(p.theme.components.input.borderRadius)};
      box-shadow: ${p => p.theme.components.input.boxShadow};
      transition: all .3s;
      background: ${p => p.color ? rgba(color(p), 0.3) : 'white'};
      box-sizing: border-box;

      &::-webkit-input-placeholder {
        color: ${p => p.color ? color(p) : 'gray'};
      }

      ${isSize}
  }

  & > input:focus {
    border: ${p => p.theme.components.input.focusBorder};
    box-shadow: ${p => p.theme.components.input.focusBoxShadow};
  }

  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }

  & > .icon {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    ${p => !p.color && css`color: ${p.theme.components.input.borderColor}`}
  }

  ${p => p.hasIcon && css`
    & > input {
      padding-left: 1.85em;
    }
  `}
`
