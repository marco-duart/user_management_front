import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { FileEdit, Trash, Eye } from "styled-icons/fa-solid";
import { GetAllUsersDTO, DeleteUserDTO } from "../../services/user/DTO";
import { format, parseISO } from "date-fns";
import { DeleteConfirmationModal } from "../modals/delete-confirmation-modal";

interface UsersTableProps {
  users?: GetAllUsersDTO.IResponse | undefined;
  deleteUser: (data: DeleteUserDTO.IParams) => void;
}

const UsersTable: React.FC<UsersTableProps> = ({ users, deleteUser }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState<number | null>(null);

  const handleDelete = (userId: number) => {
    setUserIdToDelete(userId);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (userIdToDelete !== null) {
      deleteUser({ userId: userIdToDelete });
      setIsModalOpen(false);
      setUserIdToDelete(null);
    }
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
    setUserIdToDelete(null);
  };

  return (
    <S.Container>
      {users ? (
        <S.Table>
          <thead>
            <tr>
              <S.TableHeader>ID</S.TableHeader>
              <S.TableHeader>Nome</S.TableHeader>
              <S.TableHeader>CPF</S.TableHeader>
              <S.TableHeader>Data de Nascimento</S.TableHeader>
              <S.TableHeader>Email</S.TableHeader>
              <S.TableHeader>Ações</S.TableHeader>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <S.TableRow key={user.id}>
                <S.TableCell>{user.id}</S.TableCell>
                <S.TableCell>{user.name}</S.TableCell>
                <S.TableCell>{user.cpf}</S.TableCell>
                <S.TableCell>
                  {user.birthday
                    ? format(new Date(parseISO(user.birthday)), "dd/MM/yyyy")
                    : ""}
                </S.TableCell>
                <S.TableCell>{user.email}</S.TableCell>
                <S.TableCell>
                  <S.ActionButton
                    onClick={() => navigate(`/user/${user.id}/show`)}
                    title="Ver Detalhes"
                  >
                    <Eye size={18} />
                  </S.ActionButton>
                  <S.ActionButton
                    onClick={() => navigate(`/user/${user.id}/edit`)}
                    title="Editar"
                  >
                    <FileEdit size={18} />
                  </S.ActionButton>
                  <S.ActionButton
                    onClick={() => handleDelete(user.id)}
                    title="Deletar"
                  >
                    <Trash size={18} />
                  </S.ActionButton>
                </S.TableCell>
              </S.TableRow>
            ))}
          </tbody>
        </S.Table>
      ) : (
        <S.NoDataMessage>Nenhum usuário encontrado</S.NoDataMessage>
      )}

      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onRequestClose={cancelDelete}
        onConfirm={confirmDelete}
      />
    </S.Container>
  );
};

export default UsersTable;
