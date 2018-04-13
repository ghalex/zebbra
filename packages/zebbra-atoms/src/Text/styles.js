import styled, { css } from 'styled-components'
import { size, color, px } from '@zebbra/utils'

export const StyledText = styled.p`
  font-family: ${p => p.theme.fonts.primary};
  font-weight: 400;
  line-height: 1.12;
  margin: 0;
  display: ${p => p.inline ? 'inline-block' : 'block'};
  box-sizing: border-box;
  text-decoration: none;
  font-size: ${p => px(size(p))};
  color: ${p => color(p)};
  text-align: ${p => p.textAlign};
  padding: ${p => p.padding};

  ${p => p.thin && css`font-weight: 200`};
  ${p => p.strong && css`font-weight: 800`};
`
