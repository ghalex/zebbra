import styled, { css } from 'styled-components'

export const Input = styled.div`
  display: flex;
  width: 100%;
  position: relative;

  & > input {
      width: 100%;
      font-weight: 400;
      outline: 0 none;
      transition: all .3s;
      box-sizing: border-box;
  }

  & > input:focus {
  }

  & > input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  }
`
