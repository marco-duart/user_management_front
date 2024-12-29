import React from "react";
import Modal from "react-modal";
import * as S from "./styles";

interface ModalSuccessProps {
  isOpen: boolean;
  onRequestClose: () => void;
  message: string;
}

export const SuccessModal: React.FC<ModalSuccessProps> = ({
  isOpen,
  onRequestClose,
  message,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Sucesso"
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 9999,
        },
        content: {
          padding: "0",
          border: "none",
          width: "auto",
          maxWidth: "400px",
          backgroundColor: "transparent",
        },
      }}
    >
      <S.ModalOverlay>
        <S.ModalContent>
          <S.ModalHeader>
            <h2>{message}</h2>
          </S.ModalHeader>
          <S.ModalActions>
            <button onClick={onRequestClose}>Fechar</button>
          </S.ModalActions>
        </S.ModalContent>
      </S.ModalOverlay>
    </Modal>
  );
};
