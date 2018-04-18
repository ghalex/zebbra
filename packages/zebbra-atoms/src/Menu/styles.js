import styled, { css } from 'styled-components'
import { px, isSize, isColor, isHover } from '@zebbra/utils'

const options = p => p.theme.components.menu(p) || {}
const scrollbar = css`
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

export const Menu = styled.div`
  position: relative;
  font-family: ${p => p.theme.fonts.primary};
  box-shadow: ${p => options(p).boxShadow};
  border: ${p => options(p).border};
  border-color: ${p => options(p).borderColor};
  border-radius: ${p => px(options(p).borderRadius)};
  padding: 0;
  background-color: white;
  text-align: left;
  transition: all .3s;
  max-height: ${p => p.height > 0 ? px(p.height) : 'initial'};
  overflow-y: auto;
  ${p => p.fluid && css`width: 100%;`}
  & .menu {
    box-shadow: none;
    border: none;
    border-radius: 0;
  }

  ${scrollbar}
`

export const MenuHeader = styled.div.attrs({
  className: 'menu-header'
})`
  display: flex;
  align-items: center;
  padding: 0.8em 1.2em;
  position: relative;
  cursor: initial;

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

  & > .tag {
    float: right;
    margin-top: -0.3em;
    margin-bottom: -0.3em;
  }

  & > .icon {
    margin-right: 0.5em;
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

export const MenuDivider = styled.div`
  border-top: ${p => options(p).border};
  border-color: ${p => options(p).borderColor};
  height: 0;
  margin: .${p => p.margin || 0};
`

export const MenuItems = styled.div`
`
