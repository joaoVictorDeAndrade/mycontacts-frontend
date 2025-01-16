import styled, { css } from 'styled-components';

const containerVariants = {
  default: css`
    background-color: ${({ theme }) => theme.colors.primary.main};
  `,
  success: css`
    background-color: ${({ theme }) => theme.colors.success.main};
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.danger.main};
  `,
};

export const Container = styled.div`
  ${({ type }) => containerVariants[type] || containerVariants.default}

  padding: 16px 32px;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 20px 20px -16px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  & + & {
    margin-top: 12px;
  }
`;
