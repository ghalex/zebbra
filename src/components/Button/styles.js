import styled, { css } from 'styled-components'
import { fluid, hover, disabled, loading, borders } from 'zebbra/utils'
import {
  color,
  space,
  height,
  boxShadow,
  fontFamily,
  fontWeight,
  backgroundImage,
  fontSize,
  themeGet
} from 'styled-system'

const icon = p => {
  return css`
    & .icon {
      margin: 0 5px 0 0;
      ${fontSize}
    }
    &.icon-reverse {
      & .icon {
        margin: 0 0 0 5px;
      }
    }
    &.icon-only {
      padding: 0px 0.4em;
      & .icon {
        margin: 0;
      }
    }
  `
}

const outlined = p => {
  if (!p.outlined) return
  let color = themeGet(`colors.${p.bg}`)

  return css`
    color: ${color};
    border-color: ${color};
    background: transparent;
  `
}

export const Button = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  box-sizing: border-box;
  line-height: 1.5;
  position: relative;
  user-select: none;
  text-decoration: none;
  cursor: pointer;

  ${p => p.static && css`pointer-events: none;`}

  ${icon}
  ${color}
  ${space}
  ${height}
  ${backgroundImage}
  ${borders}
  ${outlined}
  ${boxShadow}
  ${fluid}
  ${disabled}
  ${loading}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${hover}
`
