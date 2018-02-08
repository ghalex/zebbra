import styled from 'styled-components'
import { px } from 'helpers'

const radius = p => px(p.theme.components.group.borderRadius)

const Group = styled.div`
  display: inline-flex;
  box-sizing: border-box;

  & > * {
    margin: 0 -1px 0 0 !important;
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
    margin-left: 0 !important;
  }

  & > *:last-child:not(:first-child) {
    border-radius: 0 ${radius} ${radius} 0;
    margin-right: 0 !important;
  }

  &:not(:last-child) {
    margin-right: 0.5em;
  }
`

export const test = styled.div.attrs({
  color: 'red'
})`
  margin-right: 5px;
`

export const VGroup = Group.extend`
  flex-direction: column;

  & > *:first-child:not(:last-child) {
    border-radius: ${radius} ${radius} 0 0;
    margin-left: 0 !important;
  }

  & > *:last-child:not(:first-child) {
    border-radius: 0 0 ${radius} ${radius};
    margin-right: 0 !important;
  }
`
