import React, { useState } from "react";
import { useGetUsers } from "../../hooks";
import UsersTable from "../../components/users-table";
import * as S from "./styles";

export const UsersListPage: React.FC = () => {
  const [filters, setFilters] = useState({
    email: "",
    cpf: "",
    birthday: "",
  });

  const { users, deleteUser } = useGetUsers({ filters });

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <S.PageContainer>
      <S.Title>Usuários</S.Title>
      <S.SearchContainer>
        <S.SearchInput
          type="text"
          name="email"
          value={filters.email}
          placeholder="Buscar por email"
          onChange={handleSearchInputChange}
        />
        <S.SearchInput
          type="text"
          name="cpf"
          value={filters.cpf}
          placeholder="Buscar por CPF"
          onChange={handleSearchInputChange}
        />
        <S.SearchInput
          type="date"
          name="birthday"
          value={filters.birthday}
          placeholder="Buscar por Data de Nascimento"
          onChange={handleSearchInputChange}
        />
      </S.SearchContainer>

      <UsersTable users={users} deleteUser={deleteUser} />
    </S.PageContainer>
  );
};
