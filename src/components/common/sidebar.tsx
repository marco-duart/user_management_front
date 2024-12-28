import * as S from "./styles";

export const Sidebar = () => {
  return (
    <S.Sidebar>
      <S.Title>Gestão de Usuários</S.Title>
      <S.NavLink to="/users">Lista de Usuários</S.NavLink>
      <S.NavLink to="/user/new">Novo Usuário</S.NavLink>
    </S.Sidebar>
  );
};
