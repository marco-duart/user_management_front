import { useEffect, useState } from "react";
import { GetUser, UpdateUser } from "../../services/user";
import { GetUserDTO, UpdateUserDTO } from "../../services/user/DTO";

type State = {
  user: GetUserDTO.IResponse | undefined;
  loading: boolean;
};

const INITIAL_STATE: State = {
  user: undefined,
  loading: false,
};

type Props = {
  userId: number | undefined;
};

export const useUserDetail = ({ userId }: Props) => {
  const [state, setState] = useState<State>(INITIAL_STATE);

  const fetchUser = async () => {
    if (!userId) {
      return;
    }

    setState((prevState) => ({ ...prevState, loading: true }));

    const { success, user } = await GetUser({ userId });

    if (!success) {
      return;
    }

    setState((prevState) => ({ ...prevState, user, loading: false }));
  };

  const updateUser = async (data: UpdateUserDTO.IRequest) => {
    if (!userId) {
      return;
    }

    setState((prevState) => ({ ...prevState, loading: true }));

    const { success, user } = await UpdateUser({ userId }, data);

    if (!success) {
      return;
    }

    setState((prevState) => ({ ...prevState, user, loading: false }));
    fetchUser();
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    user: state.user,
    loading: state.loading,
    updateUser,
  };
};
