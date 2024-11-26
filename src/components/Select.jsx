import styled from 'styled-components';

export default styled.select`
  width: 100%;
  height: 52px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 0 16px;
  font-size: 16px;

  border: 2px solid ${({ theme }) => theme.colors.white};
  outline: none;
  transition: border-color 0.2s ease-in;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
  }
`;
