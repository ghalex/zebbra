import { css } from 'styled-components'

export const withSize = p => {
  if (!p.size) return
  if (!p.theme.sizes[p.size]) return

  return css`
    font-size: ${p.theme.sizes[p.size]};
  `
}

export const color = p => {
  if (!p.color) return 'black'
  if (!p.theme.colors[p.color]) return p.color

  return p.theme.colors[p.color]
}
