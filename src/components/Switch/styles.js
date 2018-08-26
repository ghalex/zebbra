import styled, { css, keyframes } from 'styled-components'
import { borders } from 'zebbra/utils'
import {
  style,
  bgColor,
  borderRadius,
  space,
  fontFamily,
  fontSize,
  boxShadow
} from 'styled-system'

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

const bgChecked = style({
  prop: 'bgChecked',
  cssProperty: 'backgroundColor',
  key: 'colors'
})

const bgThumb = style({
  prop: 'bgThumb',
  cssProperty: 'backgroundColor',
  key: 'colors'
})

export const Switch = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  ${space}
  ${fontFamily}
  ${fontSize}
`

export const SwitchThumb = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 0.1s 0.1s ease;
  width: ${p => p.size};

  & > span {
    position: relative;
    cursor: pointer;
    width: 100%;
    transition: background 0.1s 0.1s ease;
    height: ${p => p.thumbSize};
  }

  & > span::before {
    content: '';
    display: block;
    cursor: pointer;
    position: absolute;
    left: 0;
    width: ${p => p.thumbSize};
    height: ${p => p.thumbSize};
    transition: all 0.2s ease;
    animation: ${switchOn} .3s ease-out;


    ${p => !p.checked && css`
      left: ${p => 'calc(100% - ' + p.thumbSize + ')'};
      animation: ${switchOff} .3s ease-out;
    `}

    ${bgThumb}
    ${borderRadius}
    ${boxShadow}
  }

  ${space}
  ${p => (p.checked ? bgChecked : bgColor)}
  ${borders}
`

export const SwitchLabel = styled.label`
  display: inline-block;
  margin-left: 0.5em;
`
