import styled, { keyframes } from 'styled-components'
import { size, color, textOnColor } from 'helpers'
import is from 'styled-is'

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(359deg); }
`

export const StyledLoaderContainer = styled.div`
  position: relative;
  width: ${p => p.theme.components.loader.size};
  height: ${p => p.theme.components.loader.size};
  margin: ${p => p.theme.components.loader.margin};
  padding: ${p => p.theme.components.loader.borderSize};
  font-size: ${p => size(p)};
`

export const StyledLoader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate360} 450ms infinite linear;
  border-radius: 999px;
  border: ${p => p.theme.components.loader.borderSize} solid;
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: transparent;
  content: " ";
  display: block;
  width: ${p => p.theme.components.loader.size};
  height: ${p => p.theme.components.loader.size};
  margin: ${p => p.theme.components.loader.margin};
  background-color: transparent;

  font-size: ${p => size(p)};
  color: ${p => color(p)};

  ${is('inverted')`
    color: ${p => textOnColor(color(p))}
  `}
`

export const StyledLoaderShadow = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 999px;
  content: " ";
  display: block;
  border: ${p => p.theme.components.loader.borderSize} solid;
  width: ${p => p.theme.components.loader.size};
  height: ${p => p.theme.components.loader.size};
  margin: ${p => p.theme.components.loader.margin};
  border-color: rgba(0, 0, 0, 0.4);

  font-size: ${p => size(p)};
`
