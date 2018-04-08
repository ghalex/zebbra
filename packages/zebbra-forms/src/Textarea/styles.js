import styled, { css } from 'styled-components'
import { px, size, color } from '@zebbra/utils'

const isColor = p => {
  if (!p.color) return
  return css`
    border-color: ${p => color(p)};
  `
}

export const StyledTextarea = styled.textarea`
  font-family: ${(p) => p.theme.fonts.primary};
  font-size: ${p => px(size(p))};
  border: ${p => p.theme.components.textarea.border};
  border-radius: ${p => px(p.theme.components.textarea.borderRadius)};
  box-shadow: ${p => p.theme.components.textarea.boxShadow};
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

  &:focus {
    border: ${p => p.theme.components.textarea.focusBorder};
    box-shadow: ${p => p.theme.components.textarea.focusBoxShadow};
  }

  ${isColor}
`
