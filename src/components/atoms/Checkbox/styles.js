import styled from 'styled-components'
import { darken } from 'polished'
import { px, size, color } from 'helpers'

const colorDark = p => darken(0.2, color(p))

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  font-family: ${p => p.theme.fonts.primary};
  cursor: pointer;
  background: white;
  

  & > div {
    border: 1px solid;
    border-color: ${p => color(p)};
    border-radius: 3px;
    margin-right: 0.5em;
    font-size: ${p => px(size(p))};
    height: 1.165em;
    width: 1.165em;
    display: inline-flex;
    align-items: center;
    box-shadow: inset 0 1px 2px rgba(100, 100, 100, 0.12);
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
