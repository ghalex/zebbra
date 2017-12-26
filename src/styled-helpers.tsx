import { Theme, Sizes, Colors } from "zebbra"
import { css } from 'styled'

export const withSize = (p: {theme: Theme, size: Sizes } & any): any => {
  if (!p.size) return
  if (!p.theme.sizes[p.size]) return

  return css`
    font-size: ${p.theme.sizes[p.size]};
  `
}

export const color = (p: {theme: Theme, color: Colors } & any): string => {
  if (!p.color) return 'black'
  if (!p.theme.colors[p.color]) return p.color

  return p.theme.colors[p.color]
}