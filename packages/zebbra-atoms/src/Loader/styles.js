import styled, { css, keyframes } from 'styled-components'
import { size, color, textOnColor, px, getTheme } from '@zebbra/utils'

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(359deg); }
`

const options = p => getTheme(p).components.loader(p) || {}

export const Loader = styled.div`
  display: inline-flex;
  align-items: center;
  
  ${p => p.vertical && css`flex-direction: column;`}
  ${p => p.inverted && css`color: ${p => textOnColor(color(p))}`}
`

export const LoaderContainer = styled.div`
  position: relative;
  width: ${p => options(p).size};
  height: ${p => options(p).size};
  margin: ${p => options(p).margin};
  padding: ${p => options(p).borderSize};
  font-size: ${p => px(size(p))};

  &:not(:last-child) {
    ${p => p.vertical && css`margin-bottom: 0.5em;`}
    ${p => !p.vertical && css`margin-right: 0.5em;`}
  }
`

export const LoaderCircle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate360} 450ms infinite linear;
  border-radius: 999px;
  border: ${p => options(p).borderSize} solid;
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: transparent;
  content: " ";
  display: block;
  width: ${p => options(p).size};
  height: ${p => options(p).size};
  margin: ${p => options(p).margin};
  background-color: transparent;

  font-size: ${p => px(size(p))};
  color: ${p => color(p)};

  ${p => p.inverted && css`color: ${textOnColor(color(p))}`}
`

export const LoaderShadow = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 999px;
  content: " ";
  display: block;
  border: ${p => options(p).borderSize} solid;
  width: ${p => options(p).size};
  height: ${p => options(p).size};
  margin: ${p => options(p).margin};
  border-color: rgba(0, 0, 0, 0.4);

  font-size: ${p => px(size(p))};
`
