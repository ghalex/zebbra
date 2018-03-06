import styled from 'styled-components'
import { px } from 'helpers'

const radius = p => px(p.theme.components.group.borderRadius)

const Group = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  width: 100%;

  & > * {
    margin: 0 0px 0 0 !important;
  }

  & > *:not(:first-child):not(:last-child) {
    border-radius: 0;
  }

  &:not(:last-child) {
    margin-right: 0.5em;
  }
`

export const HGroup = Group.extend`
  flex-direction: row;

  & > *:first-child:not(:last-child) {
    border-radius: ${radius} 0 0 ${radius};
  }

  & > *:last-child:not(:first-child) {
    border-radius: 0 ${radius} ${radius} 0;
  }

  &:not(:last-child) {
    margin-right: 0.5em;
  }
`

export const VGroup = Group.extend`
  flex-direction: column;

  & > *:first-child:not(:last-child) {
    border-radius: ${radius} ${radius} 0 0;
  }

  & > *:last-child:not(:first-child) {
    border-radius: 0 0 ${radius} ${radius};
  }
`
