import styled from 'styled-components'
import {
  space,
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
  justifySelf,
  alignSelf,
  flex,
  compose
} from 'styled-system'

export const flexProps = compose(
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
  justifySelf,
  alignSelf,
  flex
)

export const StyledFlex = styled.div`
  display: flex;
  position: relative;

  ${space}
  ${flexProps}
`
