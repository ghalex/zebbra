import styled, { css } from 'styled-components'
import is, { isOr } from 'styled-is'
import { lighten } from 'polished'
import { size, color, hover, textOnColor } from 'helpers'

const outlined = p => css`
  color: ${color(p)};
  border: 1px solid ${color(p)};
  background-color: transparent;
`

const inverted = p => css`
  color: ${p => color(p)};
  background-color: ${p => textOnColor(color(p))};
`

const loading = p => css`
  color: transparent !important;
  pointer-events: none;
`

export const StyledButton = styled.div`
  height: ${p => p.theme.components.button.height};
  padding: ${p => p.theme.components.button.padding};
  border: ${p => p.theme.components.button.border};
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
  ${is('outlined')`${outlined}`}
  ${is('inverted')`${inverted}`}
  ${is('loading')`${loading}`}
  &:not(:last-child) {
    margin: 0 0.25em 0 0;
  }

  &:hover {
    background-color: ${p => hover(color(p))};
    ${isOr('outlined', 'inverted')`
      color: ${p => textOnColor(color(p))};
    `}
  }

  &:focus {
    box-shadow: 0 0 0 0.125em ${p => lighten(0.3, color(p))};
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
