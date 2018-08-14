
import { parseToHsl, darken, lighten } from 'polished'
import { css } from 'styled-components'
import { main } from '@zebbra/themes'

export const getTheme = p => {
  return p.theme.components ? p.theme : main
}

export const color = (p, d) => {
  if (!p.color) return d
  if (!getTheme(p).colors[p.color]) return p.color

  return getTheme(p).colors[p.color]
}

export const size = p => {
  if (!p.size) return
  if (!getTheme(p).sizes[p.size]) return p.size

  return getTheme(p).sizes[p.size]
}

export const hover = (color) => {
  if (parseToHsl(color).lightness > 0.2) {
    return darken(0.05, color)
  }

  return lighten(0.2, color)
}

export const textOnColor = (color) => {
  if (!color) return 'rgba(0, 0, 0, 0.8)'

  if (parseToHsl(color).lightness > 0.55) {
    return 'rgba(0, 0, 0, 0.8)'
  }

  return 'rgba(255, 255, 255, 1)'
}

export const withUnit = (value, unit) => {
  return value ? `${value}${unit}` : '0'
}

export const px = (value) => {
  return withUnit(value, 'px')
}

export const em = (value) => {
  return withUnit(value, 'em')
}

export const isFluid = p => {
  if (!p.fluid) return
  return css`
    width: 100%;
  `
}

export const isSize = p => {
  if (!p.size) return
  return css`
    font-size: ${p => px(size(p))};
  `
}

export const isOutlined = p => {
  if (!p.outlined || !p.color) return
  return css`
    color: ${color(p)};
    border-color: ${color(p)};
    background: transparent;
  `
}

export const isCircular = p => {
  if (!p.circular) return
  return css`
    border-radius: 999px;
  `
}

export const isColor = p => {
  if (!p.color) return
  return css`
    color: ${p => textOnColor(color(p))};
    background: ${p => color(p)};
    border-color: ${p => color(p)};
  `
}

export const isHover = p => {
  if (!p.color || p.static) return

  return css`
    &:hover {
      color: ${p => textOnColor(color(p))};
      background: ${p => hover(color(p))};
      border-color: ${p => hover(color(p))};
    }
  `
}

export const isInverted = p => {
  if (!p.inverted || !p.color) return
  return css`
    color: ${p => color(p)};
    background: ${p => textOnColor(color(p))};
    border-color: ${p => textOnColor(color(p))};
  `
}

export const isLoading = p => {
  if (!p.loading) return
  return css`
    color: transparent;
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

export const isDisabled = p => {
  if (!p.disabled) return
  return css`
    pointer-events: none;
    opacity: 0.7;
  `
}
