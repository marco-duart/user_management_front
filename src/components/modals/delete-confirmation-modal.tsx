import React from "react";
import Modal from "react-modal";
import * as S from "./styles";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm: () => void;
}

export const DeleteConfirmationModal: React.FC<
  DeleteConfirmationModalProps
> = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirmar Exclusão"
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
            <h2>Tem certeza que deseja deletar esse usuário?</h2>
          </S.ModalHeader>
          <S.ModalActions>
            <button onClick={onRequestClose}>Cancelar</button>
            <button onClick={onConfirm}>Confirmar</button>
          </S.ModalActions>
        </S.ModalContent>
      </S.ModalOverlay>
    </Modal>
  );
};
