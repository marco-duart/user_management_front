import styled from "styled-components";

export const ModalContainer = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalHeader = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;

  button {
    padding: 12px 25px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid #ccc;
    width: 48%;
  }

  button:first-child {
    background-color: #f0f0f0;
    color: #555;
  }

  button:last-child {
    background-color: ${props => props.theme.colors.delete};
    color: white;
    border: 1px solid ${props => props.theme.colors.delete};
  }

  button:hover {
    opacity: 0.9;
  }
`;

export const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.3s ease;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  width: 440px;
  height: 230px;
  max-width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  text-align: center;
  font-size: 16px;
  color: #333;
`;
