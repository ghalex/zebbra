import styled from 'styled-components'
import { darken } from 'polished'
import { px, size, color } from 'helpers'

const colorDark = p => p.color ? darken(0.2, color(p)) : ''

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  font-family: ${p => p.theme.fonts.primary};
  cursor: pointer;
  background: white;
  

  & > div {
    border: ${p => p.theme.components.checkbox.border};
    border-color: ${p => color(p)};
    border-radius: ${p => px(p.theme.components.checkbox.borderRadius)};
    box-shadow: ${p => p.theme.components.checkbox.boxShadow};
    margin-right: 0.5em;
    font-size: ${p => px(size(p))};
    height: 1.165em;
    width: 1.165em;
    display: inline-flex;
    align-items: center;
  }

  & .icon {
    color: ${p => color(p)};
    font-size: ${p => px(size(p))};
    width: 1.15em;
    height: 1.15em;
  }

  & > div:hover,
  & .icon:hover {
    color: ${colorDark};
    border-color: ${colorDark};
  }
`
