import styled, { css } from 'styled-components'
import { borderRadius, space } from 'styled-system'
import { fluid } from 'zebbra/utils'

const first = `
  & > *.first,
  & > *.first input,
  & > *.first .trigger .button
`

const last = `
  & > *.last,
  & > *.last input,
  & > *.last .trigger .button
`

const Group = styled.div`
  display: inline-flex;
  box-sizing: border-box;

  & > *.child,
  & > *.child input,
  & > *.child .trigger .button {
    border-radius: 0;
    ${p => p.noBorders && css`
      border-left: none;
      border-right: none;
    `}
  }

  ${p => p.fluid && css`width: 100%;`}
  ${borderRadius}
  ${fluid}
  ${space}
`

export const HGroup = styled(Group)`
  flex-direction: row;

  ${first} {
    ${borderRadius}
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    ${p => p.noBorders && css`
      border-right: none;
    `}
  }

  ${last} {
    ${borderRadius}
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    ${p => p.noBorders && css`
      border-left: none;
    `}
  }

  & > *:not(:first-child) { margin-left: -1px; }
`

export const VGroup = styled(Group)`
  flex-direction: column;

  ${first} {
    ${borderRadius}
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    ${p => p.noBorders && css`
      border-bottom: none;
    `}
  }

  ${last} {
    ${borderRadius}
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    ${p => p.noBorders && css`
      border-top: none;
    `}
  }

  & > *:not(:first-child) { margin-bottom: -1px; }
`
