import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BaseLayout from "../components/base-layout";
import { UserDetailPage, UsersListPage, NewUserPage } from "../pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Navigate to="/users" />} />
          <Route path="/users" element={<UsersListPage />} />
          <Route path="/user/:id/:action" element={<UserDetailPage />} />
          <Route path="/user/new" element={<NewUserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
