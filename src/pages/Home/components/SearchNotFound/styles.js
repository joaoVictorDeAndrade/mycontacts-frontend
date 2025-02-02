import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    text-align: center;
    word-break: break-all;
  }
`;
