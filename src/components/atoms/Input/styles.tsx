import styledComponent, { withProps } from 'styled'
import { color, withSize } from 'styled-helpers'
import { InputProps } from './types';

const styled = withProps<InputProps>(styledComponent.div)
export const StyledInput = styled`
  display: flex;
  margin-bottom: 1rem;

  & > input {
      width: 100%;
      height: ${p => p.theme.components.input(p).height};
      font-family: ${p => p.theme.fonts.primary};
      font-weight: 400;
      background: white;
      margin: 0;
      padding: 0 0.55rem;
      outline: 0 none;
      border: ${p => p.theme.components.input(p).border};
      border-radius: ${p => p.theme.components.input(p).borderRadius};
      box-shadow: ${p => p.theme.components.input(p).boxShadow};
      transition: all .3s;

      ${withSize}
  }

  & > input:focus {
    border: ${p => p.theme.components.input(p).focusBorder};
    box-shadow: ${p => p.theme.components.input(p).focusBoxShadow};
  }
`