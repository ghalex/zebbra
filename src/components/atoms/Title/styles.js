import styled from 'styled-components'
import { size, color, px } from 'helpers'
import is from 'styled-is'

export const StyledTitle = styled.div`
  font-family: ${p => p.theme.fonts.primary};
  font-weight: 400;
  margin: 0;
  line-height: 1.12;
  display: block;
  box-sizing: border-box;
  text-decoration: none;
  font-size: ${p => px(size(p) * 2)};
  color: ${p => color(p)};
  text-align: ${p => p.textAlign};

  &:not(:last-child) {
    margin-bottom: 1.0rem;
  }

  ${is('thin')`font-weight: 200`};
  ${is('strong')`font-weight: 800`};

  ${is('subtitle')`
    font-size: ${p => px(size(p) * 1.5)};
    margin-top: -18px;
  `};
`
