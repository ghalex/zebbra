import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { color, size, fontSize, themeGet } from 'styled-system'

const circular = p => {
  if (!p.circular) return
  return css`
    border-radius: 999px;
  `
}

const shadow = p => {
  if (!p.shadow) return
  let color = themeGet(`colors.${p.color}`)

  if (p.inverted) {
    color = themeGet(`colors.${p.bg}`)
  }
  return css`
    box-shadow: 0 0 0 0.18em ${p => rgba(color(p), 0.3)};
    margin: 0.185em;
  `
}

export const Icon = styled.i.attrs({
  color: p => p.inverted ? (p.bg || 'white') : p.color,
  bg: p => p.inverted ? p.color : p.bg
})`
  display: inline-flex !important;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  line-height: 1.5;

  ${color}
  ${size}
  ${fontSize}
  ${circular}
  ${shadow}
`
