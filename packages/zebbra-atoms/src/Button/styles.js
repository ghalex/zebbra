import styled, { css } from 'styled-components'
import {
  color,
  space,
  height,
  boxShadow,
  borders,
  borderRadius,
  borderColor,
  fontSize,
  variant
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
      padding: 0px 0.6em;
      & .icon {
        margin: 0;
      }
    }
  `
}

const outlined = p => {
  if (!p.outlined) return
  return css`
    border: 1px solid;
    background: transparent;
  `
}

const styles = variant({
  key: 'buttons'
})

export const Button = styled.div`
  font-weight: 400;
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

  &:not(:last-child) {
    margin: 0 0.25em 0 0;
  }

  &:hover {
    opacity: 0.8;
  }

  ${icon}
  ${color}
  ${space}
  ${height}
  ${styles}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
`
