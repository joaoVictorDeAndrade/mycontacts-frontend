import styled, { css } from 'styled-components';

export default styled.button`
  height: 52px;
  border: none;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray[200]};
    cursor: not-allowed;
  }

  ${({ danger }) => danger && css`
    background: ${({ theme }) => theme.colors.danger.main};

    &:hover {
      background: ${({ theme }) => theme.colors.danger.light};
    }

    &:active {
      background: ${({ theme }) => theme.colors.danger.dark};
    }
  `};
`;
