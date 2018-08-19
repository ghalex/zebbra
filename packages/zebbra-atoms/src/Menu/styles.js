import styled, { css } from 'styled-components'
import { hover } from '@zebbra/utils'
import {
  fontFamily,
  borders,
  borderColor,
  borderRadius,
  maxHeight,
  boxShadow,
  space,
  color
} from 'styled-system'

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
    background: rgba(0,0,0,.15);
  }

  & ::-webkit-scrollbar-thumb:hover {
    background: rgba(128,135,139,.8)
  }
`

export const Menu = styled.div`
  position: relative;
  text-align: left;
  transition: all .3s;
  overflow-y: auto;
  box-sizing: border-box;

  ${p => p.fluid && css`width: 100%;`}

  & .menu {
    box-shadow: none;
    border: none;
    border-radius: 0;
  }

  ${scrollbar}
  ${fontFamily}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
  ${maxHeight}
  ${space}
`

export const MenuHeader = styled.div.attrs({
  className: 'menu-header'
})`
  display: flex;
  align-items: center;
  padding: 0.8em 1.2em;
  position: relative;
  cursor: initial;

  ${color}
  ${space}
`

export const MenuItem = styled.div.attrs({
  className: 'menu-item'
})`
  vertical-align: middle;
  line-height: 1;
  padding: 0.8em 1.2em;
  position: relative;
  cursor: ${p => (p.static ? 'cursor' : 'pointer')};
  white-space: nowrap;

  & > .icon {
    margin-right: 0.5em;
  }

  ${color}
  ${hover}
  ${space}
`

export const MenuDivider = styled.div`
  height: 0;

  ${borders}
  ${borderColor}
  ${space}

  border-left: none;
  border-right: none;
  border-bottom: none;
`

export const MenuItems = styled.div`
`
