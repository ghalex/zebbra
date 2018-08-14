import styled, { css } from 'styled-components'
import { px, size, color, getTheme } from '@zebbra/utils'

const isColor = p => {
  if (!p.color) return
  return css`
    border-color: ${p => color(p)};
  `
}

const options = p => getTheme(p).components.textarea(p) || {}

export const StyledTextarea = styled.textarea`
  font-family: ${(p) => getTheme(p).fonts.primary};
  font-size: ${p => px(size(p))};
  border: ${p => options(p).border};
  border-radius: ${p => px(options(p).borderRadius)};
  box-shadow: ${p => options(p).boxShadow};
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
    border: ${p => options(p).focusBorder};
    box-shadow: ${p => options(p).focusBoxShadow};
  }

  ${isColor}
`
