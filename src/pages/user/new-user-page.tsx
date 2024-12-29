import React, { useState } from "react";
import { useCreateUser } from "../../hooks";
import { CreateForm } from "../../components/forms/create-form";
import { CreateUserDTO } from "../../services/user/DTO";
import * as S from "./styles";

export const NewUserPage: React.FC = () => {
  const { createUser, loading } = useCreateUser();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCreateUser = async (data: CreateUserDTO.IRequest) => {
    try {
      await createUser(data);
    } catch (error) {
      setErrorMessage("Erro ao criar o usuário. Tente novamente.");
    }
  };

  return (
    <S.PageContainer>
      <S.Title>Novo Usuário</S.Title>
      {errorMessage && <S.LoadingMessage>{errorMessage}</S.LoadingMessage>}
      <CreateForm onSubmit={handleCreateUser} loading={loading} />
    </S.PageContainer>
  );
};
