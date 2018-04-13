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
export const MenuHeader = styled.div.attrs({
  className: 'menu-header',
  isheader: 'true'
})`
  display: flex;
  align-items: center;
  padding: 0.8em 1.2em;
  position: relative;
  cursor: 'cursor';

  &::after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(34, 36, 38, 0.1);
  }
`

export const MenuItem = styled.div.attrs({
  className: 'menu-item'
})`
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
    font-weight: 500;
  `}

  ${isSize}
`

export const MenuItemContainer = styled.div`
  max-height: 195px;
  overflow-y: auto;
  overflow-x: hidden;

  & ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 8px
  }

  & ::-webkit-scrollbar-track {
    background: rgba(0,0,0,.1);
    border-radius: 0
  }

  & ::-webkit-scrollbar-thumb {
    cursor: pointer;
    border-radius: 5px;
    background: rgba(0,0,0,.25);
    -webkit-transition: color .2s ease;
    transition: color .2s ease
  }

  & ::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(0,0,0,.15)
  }

  & ::-webkit-scrollbar-thumb:hover {
    background: rgba(128,135,139,.8)
  }
`
