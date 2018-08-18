
import { parseToHsl } from 'polished'
import { css } from 'styled-components'

export const textOnColor = (color) => {
  if (!color) return 'rgba(0, 0, 0, 0.8)'

  if (parseToHsl(color).lightness > 0.55) {
    return 'rgba(0, 0, 0, 0.8)'
  }

  return 'rgba(255, 255, 255, 1)'
}

export const fluid = p => {
  if (!p.fluid) return
  return css`
    width: 100%;
  `
}

export const circular = p => {
  if (!p.circular) return
  return css`
    border-radius: 999px;
  `
}

export const loading = p => {
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

export const disabled = p => {
  if (!p.disabled) return
  return css`
    pointer-events: none;
    opacity: 0.7;
  `
}
