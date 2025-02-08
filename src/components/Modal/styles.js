import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

const scaleOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }
`;

export const Overlay = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isLeaving',
})`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);

  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${fadeIn} 0.3s;

  ${({ isLeaving }) =>
    isLeaving &&
    css`
      animation: ${fadeOut} 0.3s forwards;
    `}
`;

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'danger' || prop !== 'isLeaving',
})`
  width: 100%;
  max-width: 450px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);

  > h1 {
    font-size: 22px;
    color: ${({ theme, danger }) =>
      danger ? theme.colors.danger.main : theme.colors.gray[900]};
  }

  .modal-body {
    margin-top: 24px;
  }

  animation: ${scaleIn} 0.3s;
`;

export const Footer = styled.footer`
  margin-top: 24px;
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
    color: ${(props) => props.theme.colors.gray[200]};
    transition: border 0.2s ease-in;
  }

  .cancel-button:hover {
    border: 1px solid ${(props) => props.theme.colors.gray[200]};
  }
`;
