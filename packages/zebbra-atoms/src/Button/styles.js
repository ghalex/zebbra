import styled, { css } from 'styled-components'
import {
  isColor,
  isHover,
  isFluid,
  isOutlined,
  isInverted,
  isDisabled,
  isLoading,
  isSize,
  px
} from '@zebbra/utils'

const isWithIcon = p => {
  return css`
    & .icon {
      margin: 0 5px 0 0;
      ${isSize}
    }
    &.icon-reverse {
      & .icon {
        margin: 0 0 0 5px;
      }
    }
    &.icon-only {
      padding: 0px 0.6em;
      & .icon {
        margin: 0;
      }
    }
  `
}

const options = p => p.theme.components.button(p) || {}

export const Button = styled.div`
  height: ${p => options(p).height};
  padding: ${p => options(p).padding};
  border: ${p => options(p).border};
  border-radius: ${p => px(options(p).borderRadius)};
  color: ${p => options(p).color};
  background: ${p => options(p).background};
  font-family: ${p => p.theme.fonts.primary};
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: ${p => p.static ? 'cursor' : 'pointer'};
  outline: none;
  box-sizing: border-box;
  line-height: 1.5;
  position: relative;
  user-select: none;
  text-decoration: none;

  ${p => !p.static && css`&:hover { background: ${options(p).hoverBackground}; }`}

  ${isSize}
  ${isFluid}
  ${isColor}
  ${isHover}
  ${isOutlined}
  ${isInverted}
  ${isLoading}
  ${isDisabled}
  ${isWithIcon}

  &:not(:last-child) {
    margin: 0 0.25em 0 0;
  }

  &:focus {
    box-shadow: ${p => options(p).focusBoxShadow};
  }
  
`
