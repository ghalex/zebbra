import styled, { css, keyframes } from 'styled-components'
import { isSize, color, px, getTheme } from '@zebbra/utils'

const switchOn = keyframes`
  50% {
      transform: scaleY(1.1);
  }
`

const switchOff = keyframes`
  50% {
      transform: scaleY(1.2);
  }
`

const options = p => getTheme(p).components.switch(p) || {}

export const Switch = styled.div`
  display: flex;
  align-items: center;
  font-family: ${p => getTheme(p).fonts.primary};
  cursor: pointer;

  ${isSize}

  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: ${p => options(p).width};
    padding: ${p => p.padding === null ? px(options(p).thumbPadding) : px(p.padding)};
    transition: background 0.1s 0.1s ease;
    border-radius: ${p => p.square ? '4px' : '50px'};
    background: ${p => !p.checked ? '#9c9c9c' : color(p)};
  }

  & > div:not(:last-child) {
    margin-right: 0.5em;
  }

  & > div span {
    position: relative;
    cursor: pointer;
    width: 100%;
    height: ${p => options(p).thumbSize};
    transition: background 0.1s 0.1s ease;
  }

  & > div span::before {
    content: '';
    display: block;
    cursor: pointer;
    position: absolute;
    left: 0;
    width: ${p => options(p).thumbSize};
    height: ${p => options(p).thumbSize};
    border-radius: ${p => p.square ? '4px' : '50px'};
    transition: all 0.2s ease;
    animation: ${switchOn} .3s ease-out;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
    background: #fcfff4;

    ${p => !p.checked && css`
      left: ${p => 'calc(100% - ' + options(p).thumbSize + ')'};
      animation: ${switchOff} .3s ease-out;
    `}
  }

  & > div span:hover::before {
    opacity: 0.9;
  }
`
