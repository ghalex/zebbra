import styled, { css } from 'styled-components'
import { px, isSize, isColor, isHover } from '@zebbra/utils'

const options = p => p.theme.components.menu(p) || {}

export const Menu = styled.div`
  position: relative;
  font-family: ${p => p.theme.fonts.primary};
  box-shadow: ${p => options(p).boxShadow};
  padding: 0;
  background-color: white;
  text-align: left;
  transition: all .3s;
`

export const MenuItemContainer = styled.div`
  max-height: ${p => p.height > 0 ? px(p.height) : 'initial'};
  overflow-y: auto;
  overflow-x: hidden;
  border: ${p => options(p).border};
  border-radius: ${p => px(options(p).borderRadius)};

  ${p => p.hasHeader && css`
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  `}

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

export const MenuHeader = styled.div.attrs({
  className: 'menu-header'
})`
  display: flex;
  align-items: center;
  padding: 0.8em 1.2em;
  position: relative;
  cursor: initial;
  border: ${p => options(p).border};
  border-top-left-radius: ${p => px(options(p).borderRadius)};
  border-top-right-radius: ${p => px(options(p).borderRadius)};
  border-bottom: none;

  ${isSize}
  ${isColor}
`

export const MenuItem = styled.div.attrs({
  className: 'menu-item'
})`
  vertical-align: middle;
  line-height: 1;
  padding: 0.8em 1.2em;
  position: relative;
  cursor: ${p => p.static ? 'cursor' : 'pointer'};

  &:not(:first-child)::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(34, 36, 38, 0.1);
  }

  & .tag {
    float: right;
    margin-top: -0.3em;
    margin-bottom: -0.3em;
  }

  ${p => !p.static && css`
    &:hover {
      background: ${p => options(p).hover};
    }
  `}

  ${isSize}
  ${isColor}
  ${isHover}
`
