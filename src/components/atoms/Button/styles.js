import styled from 'styled-components'
import is from 'styled-is'
import { size, color, textOnColor } from 'helpers'

export const StyledButton = styled.div`
  height: ${p => p.theme.components.button.height};
  padding: ${p => p.theme.components.button.padding};
  border-radius: ${p => p.theme.components.button.radius};
  font-family: ${p => p.theme.fonts.primary};
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  line-height: 1.5;
  position: relative;
  user-select: none;
  text-decoration: none;
  font-size: ${p => size(p)};
  background-color: ${p => color(p)};
  color: ${p => textOnColor(color(p))};

  ${is('hasShadow')`box-shadow: ${(p:any) => p.theme.components.button.boxShadow};`}

  &:not(:last-child) {
    margin: 0 0.25em 0 0;
  }
  
  & .icon {
    margin: 0 5px 0 0;
    font-size: ${p => size(p)};
  }

  & .loader-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .loader {
      max-height: 100%;
    }
  }
`
