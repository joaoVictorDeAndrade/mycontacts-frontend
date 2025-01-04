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

  appearance: none; /* Removes the default arrow */
  -webkit-appearance: none; /* Removes the arrow in Safari */
  -moz-appearance: none;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
  }

  &[disabled] {
    background: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
