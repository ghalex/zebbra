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
} from '@coderbox/utils'

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

export const Button = styled.div.attrs({
  button: p => ({ ...p.theme.components.button })
})`
  height: ${p => p.button.height};
  padding: ${p => p.button.padding};
  border: ${p => p.button.border};
  border-radius: ${p => px(p.button.borderRadius)};
  color: ${p => p.button.color};
  background: ${p => p.button.background};
  font-family: ${p => p.theme.fonts.primary};
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  line-height: 1.5;
  position: relative;
  user-select: none;
  text-decoration: none;

  ${p => !p.static && css`&:hover { background: ${p.button.hoverBackground}; }`}

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
    box-shadow: ${p => p.button.focusBoxShadow};
  }
  
`
