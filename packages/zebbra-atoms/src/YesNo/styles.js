import styled, { keyframes } from 'styled-components'
import { display, space } from 'styled-system'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const StyledYesNo = styled.div`
  box-sizeing: border-box;

  .btnNo,
  .btnYes {
    animation: ${fadeIn} 0.15s linear;
  }

  ${display}
  ${space}
`
