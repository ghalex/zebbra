import styled, { css } from 'styled-components'

export const StyledTextarea = styled.textarea`
  transition: all .3s;
  font-weight: 400;
  background: white;
  margin: 0;
  outline: 0 none;
  display: block;
  max-width: 100%;
  min-width: 100%;
  padding: 0.625em;
  resize: vertical;
  box-sizing: border-box;
  appearance: none;

  &:focus {
  }
`
