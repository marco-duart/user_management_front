import React from "react";
import { useParams } from "react-router-dom";
import { useUserDetail } from "../../hooks";
import * as S from "./styles";
import { EditForm } from "../../components/forms/edit-form";

export const UserDetailPage: React.FC = () => {
  const { id, action } = useParams<{ id: string; action: "show" | "edit" }>();
  const { user, updateUser, loading } = useUserDetail({ userId: Number(id) });

  if (loading) {
    return <S.LoadingMessage>Carregando...</S.LoadingMessage>;
  }

  if (!user) {
    return <S.LoadingMessage>Usuário não encontrado.</S.LoadingMessage>;
  }

  return (
    <S.FormContainer>
      <S.Title>Detalhes do Usuário</S.Title>

      {action === "show" && (
        <S.UserInfo>
          <S.InfoRow>
            <strong>ID:</strong> {user.id}
          </S.InfoRow>
          <S.InfoRow>
            <strong>Nome:</strong> {user.name}
          </S.InfoRow>
          <S.InfoRow>
            <strong>Email:</strong> {user.email}
          </S.InfoRow>
          <S.InfoRow>
            <strong>CPF:</strong> {user.cpf}
          </S.InfoRow>
          <S.InfoRow>
            <strong>Data de Nascimento:</strong> {user.birthday}
          </S.InfoRow>

          <S.AddressSection>
            <S.SubTitle>Endereço(s)</S.SubTitle>
            {user.addresses.length > 0 ? (
              user.addresses.map((address) => (
                <S.AddressCard key={address.id}>
                  <S.InfoRow>
                    <strong>Rua:</strong> {address.street}
                  </S.InfoRow>
                  <S.InfoRow>
                    <strong>Número:</strong> {address.number}
                  </S.InfoRow>
                  <S.InfoRow>
                    <strong>Complemento:</strong> {address.complement}
                  </S.InfoRow>
                  <S.InfoRow>
                    <strong>Bairro:</strong> {address.neighborhood}
                  </S.InfoRow>
                  <S.InfoRow>
                    <strong>Cidade:</strong> {address.city}
                  </S.InfoRow>
                  <S.InfoRow>
                    <strong>Estado:</strong> {address.state}
                  </S.InfoRow>
                  <S.InfoRow>
                    <strong>País:</strong> {address.country}
                  </S.InfoRow>
                  <S.InfoRow>
                    <strong>CEP:</strong> {address.zip_code}
                  </S.InfoRow>
                </S.AddressCard>
              ))
            ) : (
              <S.InfoRow>Sem endereços registrados.</S.InfoRow>
            )}
          </S.AddressSection>
        </S.UserInfo>
      )}

      {action === "edit" && (
        <EditForm
          defaultValues={user}
          onSubmit={updateUser}
          loading={loading}
        />
      )}
    </S.FormContainer>
  );
};
