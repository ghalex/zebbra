import styled from 'styled-components'
import { px, isFluid, getTheme } from '@zebbra/utils'

const radius = p => px(getTheme(p).components.group(p).borderRadius)

const Group = styled.div`
  display: inline-flex;
  box-sizing: border-box;

  & > * {
    margin: 0 0 0 0 !important;
  }

  & > *:not(:first-child):not(:last-child),
  & > .dropdown:not(:first-child):not(:last-child) .trigger .button {
    border-radius: 0;
  }

  &:not(:last-child) {
    margin-right: 0.5em;
  }

  ${isFluid}
`

export const HGroup = Group.extend`
  flex-direction: row;

  & > *:not(:first-child):not(:last-child),
  & > .dropdown:not(:first-child):not(:last-child) .trigger .button {
    margin-left: -1px !important;
  }

  & > *:first-child:not(:last-child),
  & > *:first-child:not(:last-child) input,
  & > .dropdown:first-child:not(:last-child) .trigger .button {
    border-radius: ${radius} 0 0 ${radius};
  }

  & > *:last-child:not(:first-child),
  & > *:last-child:not(:first-child) input,
  & > .dropdown:last-child:not(:first-child) .trigger .button {
    border-radius: 0 ${radius} ${radius} 0;
    margin-left: -1px !important;
  }

  &:not(:last-child) {
    margin-right: 0.5em;
  }
`

export const VGroup = Group.extend`
  flex-direction: column;

  & > *:not(:first-child):not(:last-child),
  & > .dropdown:not(:first-child):not(:last-child) .trigger .button {
    margin-top: -1px !important;
  }

  & > *:first-child:not(:last-child),
  & > *:first-child:not(:last-child) input,
  & > .dropdown:first-child:not(:last-child) .trigger .button {
    border-radius: ${radius} ${radius} 0 0;
  }

  & > *:last-child:not(:first-child),
  & > *:last-child:not(:first-child) input,
  & > .dropdown:last-child:not(:first-child) .trigger .button {
    border-radius: 0 0 ${radius} ${radius};
    margin-top: -1px !important;
  }
`
