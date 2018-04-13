import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { px, size, color } from '@zebbra/utils'

const colorDark = p => p.color ? darken(0.08, color(p)) : ''
const options = p => p.theme.components.checkbox(p) || {}

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  font-family: ${p => p.theme.fonts.primary};
  cursor: pointer;
  background: transparent;

  & > div {
    border: ${p => options(p).border};
    border-color: ${p => color(p)};
    border-radius: ${p => px(options(p).borderRadius)};
    box-shadow: ${p => options(p).boxShadow};
    margin-right: 0.5em;
    font-size: ${p => px(size(p) * 0.825)};
    height: 1.165em;
    width: 1.165em;
    display: inline-flex;
    align-items: center;

    ${p => p.checked && css`
      background-color: ${p => color(p)};
    `}
  }

  & .icon {
    font-size: ${p => px(size(p) * 0.825)};
    width: 1.15em;
    height: 1.15em;
  }

  & > div:hover,
  & .icon:hover {
    border-color: ${colorDark};
    background-color: ${colorDark};
  }

  & label {
    margin-left: 0.25em;
  }
`
