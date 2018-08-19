import styled, { css, keyframes } from 'styled-components'

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

export const Switch = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background 0.1s 0.1s ease;
  }

  & > div:not(:last-child) {
    margin-right: 0.5em;
  }

  & > div span {
    position: relative;
    cursor: pointer;
    width: 100%;
    transition: background 0.1s 0.1s ease;
  }

  & > div span::before {
    content: '';
    display: block;
    cursor: pointer;
    position: absolute;
    left: 0;
    border-radius: ${p => p.square ? '4px' : '50px'};
    transition: all 0.2s ease;
    animation: ${switchOn} .3s ease-out;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
    background: #fcfff4;

    ${p => !p.checked && css`
      animation: ${switchOff} .3s ease-out;
    `}
  }

  & > div span:hover::before {
    opacity: 0.9;
  }
`
