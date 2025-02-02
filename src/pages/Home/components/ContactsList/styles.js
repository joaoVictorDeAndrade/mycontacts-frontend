import styled from 'styled-components';

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;
      gap: 8px;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px 8px;
        border-radius: 4px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 8px;

    a {
      margin-top: 1px;
    }

    button {
      background: transparent;
      border: none;
    }
  }
`;

export const ListHeader = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== 'orderBy',
})`
  margin-top: 24px;
  margin-bottom: 8px;

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    img {
      rotate: ${({ orderBy }) => (orderBy === 'asc' ? '0deg' : '180deg')};
      transition: rotate 0.2s ease-in;
    }

    span {
      margin-right: 8px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;
