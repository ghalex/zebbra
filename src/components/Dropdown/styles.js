import styled, { css } from 'styled-components'
import { space, fontFamily, fontSize } from 'styled-system'

export const Container = styled.div`
  display: ${p => p.inline ? 'inline-flex' : 'flex'};
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  ${space}
  ${fontFamily}
  ${fontSize}
`

export const Trigger = styled.div`
  ${p => p.fluid && css`width: 100%;`}

  & .button {
    padding-right: 0;
    justify-content: space-between;
  }

  & .icon {
    margin-left: 0.5em;
  }
`

export const TriggerContainer = styled.div`
  ${p => p.fluid && css`width: 100%;`}
`

export const MenuContainer = styled.div`
  position: absolute;
  transition: all .3s;
  width: auto;
  top: calc(100% + 2px);
  z-index: 1000;
  ${p => p.fluid && css`width: 100%;`}
  ${p => !p.open && css`display: none;`}
  ${p => p.direction === 'left' ? css`left: 0;` : css`left: auto;right: 0;`}
`
