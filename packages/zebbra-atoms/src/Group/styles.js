import styled, { css } from 'styled-components'
import { borderRadius } from 'styled-system'

const Group = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  overflow: hidden;

  & > .button,
  & > .tag,
  & > .icon {
    margin: 0 0 0 0 !important;
    border-radius: 0;
  }

  ${p => p.fluid && css`width: 100%`}
  ${borderRadius}
`

export const HGroup = Group.extend`
  flex-direction: row;
  & > *:first-child {
    ${borderRadius}
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  & > *:last-child {
    ${borderRadius}
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  & > *:not(:first-child) {
    margin-left: -1px !important;
  }
`

export const VGroup = Group.extend`
  flex-direction: column;
  & > *:first-child {
    ${borderRadius}
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  & > *:last-child {
    ${borderRadius}
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  & > *:not(:first-child) {
    margin-top: -1px !important;
  }
`
