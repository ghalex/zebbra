import styled from 'styled-components'
import { space, color, width, height } from 'styled-system'
import { flexbox } from 'zebbra/utils'

export const StyledFlex = styled.div`
  display: flex;
  position: relative;

  ${space}
  ${color}
  ${flexbox}
  ${width}
  ${height}
`
