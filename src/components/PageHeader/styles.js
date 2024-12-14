import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 24px;

  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }

    img {
      transform: rotate(-90deg);
    }
  }

  h1 {
    font-size: 24px;
  }
`;
