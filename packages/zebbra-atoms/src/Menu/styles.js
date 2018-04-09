import styled, { css } from 'styled-components'
import { px, isSize } from '@zebbra/utils'

const menu = p => p.theme.components.menu || {}

export const Menu = styled.div`
  position: relative;
  font-family: ${p => p.theme.fonts.primary};
  border: ${p => menu(p).border};
  border-radius: ${p => px(menu(p).borderRadius)};
  box-shadow: ${p => menu(p).boxShadow};
  padding: 0;
  background-color: white;
  text-align: left;
`

export const MenuItem = styled.div`
  display: flex;
  padding: 0.8em 1.2em;
  position: relative;
  cursor: pointer;
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
      background: ${p => menu(p).hover};
    }
  `}

  ${p => p.active && css`
    background: ${p => menu(p).hover};
  `}

  ${isSize}
`
