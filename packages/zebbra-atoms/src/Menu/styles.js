import styled, { css } from 'styled-components'
import { px, isSize } from '@zebbra/utils'

const options = p => p.theme.components.menu(p) || {}

export const Menu = styled.div`
  position: relative;
  font-family: ${p => p.theme.fonts.primary};
  border: ${p => options(p).border};
  border-radius: ${p => px(options(p).borderRadius)};
  box-shadow: ${p => options(p).boxShadow};
  padding: 0;
  background-color: white;
  text-align: left;
  transition: all .3s;
`

export const MenuItem = styled.div`
  display: flex;
  padding: 0.8em 1.2em;
  position: relative;
  cursor: ${p => p.static ? 'cursor' : 'pointer'};
  align-items: center;
  justify-content: space-between;

  &:not(:first-child)::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(34, 36, 38, 0.1);
  }

  ${p => !p.static && css`
    &:hover {
      background: ${p => options(p).hover};
    }
  `}

  ${p => p.active && css`
    background: ${p => options(p).hover};
  `}

  ${isSize}
`
