import styled, { css, keyframes } from 'styled-components'
import { size, space, fontSize, color, fontFamily } from 'styled-system'

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(359deg); }
`

export const Loader = styled.div`
  display: inline-flex;
  align-items: center;
  
  ${color}
  ${fontFamily}
  ${p => p.vertical && css`flex-direction: column;`}
`

export const LoaderContainer = styled.div`
  position: relative;
  padding: ${p => `${p.borderSize}px`};

  &:not(:last-child) {
    ${p => p.vertical && css`margin-bottom: 0.5em;`}
    ${p => !p.vertical && css`margin-right: 0.5em;`}
  }

  ${size}
  ${space}
  ${fontSize}
`

export const LoaderCircle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  content: " ";
  animation: ${rotate360} 450ms infinite linear;
  border: ${p => `${p.borderSize}px solid`};
  border-radius: 999px;
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: transparent;

  ${size}
  ${space}
  ${color}
  ${fontSize}
`

export const LoaderShadow = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  content: " ";
  display: block;
  border: ${p => `${p.borderSize}px solid`};
  border-radius: 999px;
  border-color: rgba(0, 0, 0, 0.4);

  ${size}
  ${space}
  ${fontSize}
`
