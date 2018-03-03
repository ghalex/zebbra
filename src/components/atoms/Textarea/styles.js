import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const StyledTextarea = styled.textarea`
  font-family: ${(p) => p.theme.fonts.primary};
  font-weight: 400;
  background: white;
  margin: 0;
  outline: 0;
  display: block;
  max-width: 100%;
  min-width: 100%;
  padding: 0.625em;
  resize: vertical;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  box-sizing: border-box;
  appearance: none;
  box-shadow: inset 0 1px 2px rgba(100, 100, 100, 0.12);
`
