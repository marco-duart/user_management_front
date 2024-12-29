import { isAxiosError } from "axios";
import api from "../api";

import {
  GetUserDTO,
  GetAllUsersDTO,
  CreateUserDTO,
  UpdateUserDTO,
  DeleteUserDTO,
  CheckCpfDTO,
  CheckEmailDTO,
} from "./DTO";

export const GetAllUsers = async (filters: GetAllUsersDTO.IParams) => {
  try {
    const response = await api.get<GetAllUsersDTO.IResponse>("/users", {
      params: filters,
    });

    return {
      success: true,
      message: "Users retrieved successfully",
      users: response.data,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message: error.response?.data?.message,
        code: error.response?.status,
      };
    }
    return {
      success: false,
      message: "An unexpected error occurred",
      code: "UNKNOWN_ERROR",
    };
  }
};

export const GetUser = async (params: GetUserDTO.IParams) => {
  const { userId } = params;
  try {
    const response = await api.get<GetUserDTO.IResponse>(`/users/${userId}`);
    return {
      success: true,
      message: "User retrieved successfully",
      user: response.data,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message: error.response?.data?.message,
        code: error.response?.status,
      };
    }
    return {
      success: false,
      message: "An unexpected error occurred",
      code: "UNKNOWN_ERROR",
    };
  }
};

export const CreateUser = async (data: CreateUserDTO.IRequest) => {
  try {
    const response = await api.post<CreateUserDTO.IResponse>("/users", data);
    return {
      success: true,
      message: "User created successfully",
      user: response.data,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message: error.response?.data?.message,
        code: error.response?.status,
      };
    }
    return {
      success: false,
      message: "An unexpected error occurred",
      code: "UNKNOWN_ERROR",
    };
  }
};

export const UpdateUser = async (
  params: UpdateUserDTO.IParams,
  data: UpdateUserDTO.IRequest
) => {
  const { userId } = params;
  try {
    const response = await api.patch<UpdateUserDTO.IResponse>(
      `/users/${userId}`,
      data
    );
    return {
      success: true,
      message: "User updated successfully",
      user: response.data,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message: error.response?.data?.message,
        code: error.response?.status,
      };
    }
    return {
      success: false,
      message: "An unexpected error occurred",
      code: "UNKNOWN_ERROR",
    };
  }
};

export const DeleteUser = async (params: DeleteUserDTO.IParams) => {
  const { userId } = params;
  try {
    await api.delete(`/users/${userId}`);
    return {
      success: true,
      message: "User deleted successfully",
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message: error.response?.data?.message,
        code: error.response?.status,
      };
    }
    return {
      success: false,
      message: "An unexpected error occurred",
      code: "UNKNOWN_ERROR",
    };
  }
};

export const CheckEmail = async (data: CheckEmailDTO.IParams) => {
  try {
    const response = await api.get<CheckEmailDTO.IResponse>(
      "/users/check_email",
      {
        params: data,
      }
    );

    return {
      success: true,
      message: response.data.message || "E-mail verificado com sucesso",
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message: error.response?.data?.message,
        code: error.response?.status,
      };
    }
    return {
      success: false,
      message: "An unexpected error occurred",
      code: "UNKNOWN_ERROR",
    };
  }
};

export const CheckCPF = async (data: CheckCpfDTO.IParams) => {
  try {
    const response = await api.get<CheckCpfDTO.IResponse>("/users/check_cpf", {
      params: data,
    });

    return {
      success: true,
      message: response.data.message || "CPF verificado com sucesso",
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message: error.response?.data?.message,
        code: error.response?.status,
      };
    }
    return {
      success: false,
      message: "An unexpected error occurred",
      code: "UNKNOWN_ERROR",
    };
  }
};
