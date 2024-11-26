import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);

  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  background: ${props => props.theme.colors.white};
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);

  h1 {
    font-size: 22px;
    color: ${({theme, danger}) => (
    danger ? theme.colors.danger.main : theme.colors.gray[900]
  )};
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;

  .cancel-button {
    background: transparent;
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 0 16px;
    height: 52px;
    font-size: 16px;
    color: ${props => props.theme.colors.gray[200]};
    transition: border 0.2s ease-in;
  }

  .cancel-button:hover {
    border: 1px solid ${props => props.theme.colors.gray[200]};
  }
`;
