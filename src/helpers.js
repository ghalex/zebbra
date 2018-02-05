import { parseToHsl } from 'polished'

export const color = p => {
  if (!p.color) return
  if (!p.theme.colors[p.color]) return p.color

  return p.theme.colors[p.color]
}

export const size = p => {
  if (!p.size) return
  if (!p.theme.sizes[p.size]) return p.size

  return p.theme.sizes[p.size]
}

export const textOnColor = (color) => {
  if (!color) return 'rgba(0, 0, 0, 0.8)'

  if (parseToHsl(color).lightness > 0.55) {
    return 'rgba(0, 0, 0, 0.8)'
  }

  return 'rgba(255, 255, 255, 1)'
}
