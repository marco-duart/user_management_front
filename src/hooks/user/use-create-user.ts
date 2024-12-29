import { useState } from "react";
import { CreateUser } from "../../services/user";
import { CreateUserDTO } from "../../services/user/DTO";

type State = {
  loading: boolean;
};

const INITIAL_STATE: State = {
  loading: false,
};

export const useCreateUser = () => {
  const [state, setState] = useState<State>(INITIAL_STATE);

  const createUser = async (data: CreateUserDTO.IRequest) => {
    setState((prevState) => ({ ...prevState, loading: true }));

    const { success, user } = await CreateUser(data);

    if (!success) {
      return;
    }

    setState((prevState) => ({ ...prevState, user, loading: false }));
  };

  return {
    loading: state.loading,
    createUser,
  };
};
