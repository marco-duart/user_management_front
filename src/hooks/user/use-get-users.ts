import { useEffect, useState } from "react";
import { GetAllUsers, DeleteUser } from "../../services/user";
import { GetAllUsersDTO, DeleteUserDTO } from "../../services/user/DTO";

type State = {
  users: GetAllUsersDTO.IResponse | undefined;
  loading: boolean;
};

const INITIAL_STATE: State = {
  users: [],
  loading: false,
};

type Props = {
  filters: GetAllUsersDTO.IParams;
};

export const useGetUsers = ({ filters }: Props) => {
  const [state, setState] = useState<State>(INITIAL_STATE);

  const fetchUsers = async () => {
    setState((prevState) => ({ ...prevState, loading: true }));

    const { success, users } = await GetAllUsers(filters);

    if (!success) {
      return;
    }

    setState((prevState) => ({ ...prevState, users, loading: false }));
  };

  const deleteUser = async (data: DeleteUserDTO.IParams) => {
    setState((prevState) => ({ ...prevState, loading: true }));

    const { success } = await DeleteUser(data);

    if (!success) {
      return;
    }

    setState((prevState) => ({ ...prevState, loading: false }));
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, [filters]);

  return {
    users: state.users,
    loading: state.loading,
    deleteUser,
  };
};
