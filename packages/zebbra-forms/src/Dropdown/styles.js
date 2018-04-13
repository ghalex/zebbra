import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: ${p => p.inline ? 'inline-flex' : 'flex'};
  flex-direction: column;
  align-items: flex-start;

  > *:first-child {
    margin-bottom: 0.1rem;
  }
`
export const TriggerContainer = styled.div`
`

export const MenuContainer = styled.div`
  position: relative;
  width: 100%;

  & > .menu {
    position: absolute;
    transition: all .3s;
    top: 0;
    left: 0;
    z-index: 1000;
    ${p => !p.open && css`display: none;`}
  }
`
