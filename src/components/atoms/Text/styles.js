import styled from 'styled-components'
import { size, color, px } from 'helpers'
import is from 'styled-is'

export const StyledText = styled.p`
  font-family: ${p => p.theme.fonts.primary};
  font-weight: 400;
  margin: 0;
  line-height: 1.12;
  display: block;
  box-sizing: border-box;
  text-decoration: none;
  font-size: ${p => px(size(p))};
  color: ${p => color(p)};
  text-align: ${p => p.textAlign};
  padding: ${p => p.padding};

  ${is('thin')`font-weight: 200`};
  ${is('strong')`font-weight: 800`};
`
