import styled, { css } from 'styled-components'
import { isOr } from 'styled-is'
import { lighten } from 'polished'
import { px, size, color, hover, textOnColor } from 'helpers'

const isOutlined = p => {
  if (!p.outlined || !p.color) return
  return css`
    color: ${color(p)};
    border-color: ${color(p)};
    background: transparent;
  `
}

const isInverted = p => {
  if (!p.inverted || !p.color) return
  return css`
    color: ${p => color(p)};
    background: ${p => textOnColor(color(p))};
    border-color: ${p => textOnColor(color(p))};
  `
}

const isLoading = p => {
  if (!p.loading) return
  return css`
    color: transparent !important;
    pointer-events: none;

    & .loader-container {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      .loader {
        max-height: 100%;
      }
    }
  `
}

const isColor = p => {
  if (!p.color) return
  return css`
    color: ${p => textOnColor(color(p))};
    background: ${p => color(p)};
    border-color: ${p => color(p)};

    &:hover {
      background: ${p => hover(color(p))};
      border-color: ${p => hover(color(p))};
      ${isOr('outlined', 'inverted')`
        color: ${p => textOnColor(color(p))};
      `}
    }

    &:focus {
      box-shadow: 0 0 0 0.125em ${p => lighten(0.3, color(p))};
    }
  `
}

const isWithIcon = p => {
  return css`
    & .icon {
      margin: 0 5px 0 0;
      font-size: ${p => px(size(p))};
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

const isDisabled = p => {
  if (!p.disabled) return
  return css`
    pointer-events: none;
    opacity: 0.3;
  `
}

export const StyledButton = styled.div`
  height: ${p => p.theme.components.button.height};
  padding: ${p => p.theme.components.button.padding};
  border: ${p => p.theme.components.button.border};
  border-color: ${p => p.theme.components.button.borderColor};
  border-radius: ${p => px(p.theme.components.button.borderRadius)};
  color: ${p => p.theme.components.button.color};
  background: ${p => p.theme.components.button.background};
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
  font-size: ${p => px(size(p))};

  &:hover {
    background: ${p => p.theme.components.button.hoverBackground};
  }

  ${isColor}
  ${isOutlined}
  ${isInverted}
  ${isLoading}
  ${isWithIcon}
  ${isDisabled}

  &:not(:last-child) {
    margin: 0 0.25em 0 0;
  }

  
`
