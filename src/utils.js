
import { parseToHsl, darken, lighten } from 'polished'
import { css } from 'styled-components'
import {
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
  justifySelf,
  alignSelf,
  flex,
  compose
} from 'styled-system'

export const hover = p => {
  let bg = 'white'
  let bgHover = null
  let colorHover = null

  if (p.bg) {
    if (p.theme && p.theme.colors && p.theme.colors[p.bg]) {
      bg = p.theme.colors[p.bg]
      colorHover = p.theme.colors[p.color]
    } else {
      bg = p.bg
      colorHover = p.color
    }
  }

  if (parseToHsl(bg).lightness > 0.2) {
    bgHover = darken(0.05, bg)
  } else {
    bgHover = lighten(0.2, bg)
  }

  return css`
    &:hover {
      color: ${colorHover};
      background-color: ${bgHover};
    }
  `
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

export const flexbox = compose(
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
  justifySelf,
  alignSelf,
  flex
)

export const removeMarginProps = props => {
  const { m, mt, mb, ml, mr, mx, my, ...rest } = props
  return rest
}

export const removePaddingProps = props => {
  const { p, pt, pb, pl, pr, px, py, ...rest } = props
  return rest
}

export const removeSpaceProps = props => {
  return removePaddingProps(removeMarginProps(props))
}
