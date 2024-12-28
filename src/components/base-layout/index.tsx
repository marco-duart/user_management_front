import { Outlet } from "react-router-dom";
import { Sidebar } from "../common";
import * as S from "./styles";

const BaseLayout = () => {
  return (
    <S.Container>
      <S.SidebarSection>
        <Sidebar />
      </S.SidebarSection>
      <S.ContentSection>
        <Outlet />
      </S.ContentSection>
    </S.Container>
  );
};

export default BaseLayout;
