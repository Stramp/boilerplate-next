import styled, { css } from 'styled-components'

export const Box = styled.main`
  ${({ theme }) => css`
    width: 100px;
    height: 100px;
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
