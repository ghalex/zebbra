import styled, { keyframes } from 'styled-components'

export const fade = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`
export const StackItem = styled.div`
  display: ${p => p.visible ? 'block' : 'none'};
  padding: 1px 0;
  animation: ${fade} 0.35s ease-in-out forwards;
`

export const StackToolbar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`
