import styled, { css } from 'styled-components'
import { size, color, px } from '@zebbra/utils'

const hasMargin = p => {
  if (p.margin !== undefined) {
    return css`margin: ${p.margin};`
  }

  return css`
    margin: 0 0 1.0rem 0;
    &:not(:first-child) {
      ${p => p.subtitle && css`margin-top: -18px`};
    }
  `
}

export const StyledTitle = styled.div`
  font-family: ${p => p.theme.fonts.primary};
  font-weight: 400;
  line-height: 1.12;
  display: block;
  box-sizing: border-box;
  text-decoration: none;
  font-size: ${p => px(size(p) * 1.5)};
  color: ${p => color(p)};
  text-align: ${p => p.textAlign};

  ${p => p.thin && css`font-weight: 200`};
  ${p => p.strong && css`font-weight: 800`};
  ${p => p.subtitle && css`font-size: ${px(size(p))}`};
  ${hasMargin}
`
