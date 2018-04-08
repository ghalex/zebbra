import styled from 'styled-components'
import { px, isFluid } from '@coderbox/utils'

const radius = p => px(p.theme.components.group.borderRadius)

const Group = styled.div`
  display: inline-flex;
  box-sizing: border-box;

  & > * {
    margin: 0 0px 0 0 !important;
  }

  & > *:not(:first-child):not(:last-child) {
    border-radius: 0;
  }

  &:not(:last-child) {
    margin-right: 0.5em;
  }

  ${isFluid}
`

export const HGroup = Group.extend`
  flex-direction: row;

  & > *:first-child:not(:last-child),
  & > *:first-child:not(:last-child) input {
    border-radius: ${radius} 0 0 ${radius};
  }

  & > *:last-child:not(:first-child),
  & > *:last-child:not(:first-child) input {
    border-radius: 0 ${radius} ${radius} 0;
  }

  &:not(:last-child) {
    margin-right: 0.5em;
  }
`

export const VGroup = Group.extend`
  flex-direction: column;

  & > *:first-child:not(:last-child),
  & > *:first-child:not(:last-child) input {
    border-radius: ${radius} ${radius} 0 0;
  }

  & > *:last-child:not(:first-child),
  & > *:last-child:not(:first-child) input {
    border-radius: 0 0 ${radius} ${radius};
  }
`
