import styled from 'styled-components'

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${p => p.align};

  & > .title {
    margin-bottom: 0.5em !important;
    font-weight: 500;

    & span {
      color: ${p => p.theme.colors.danger}
    }
  }

  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`
