export namespace GetAllUsersDTO {
  export interface IParams {
    email?: string;
    cpf?: string;
    birthday?: string;
  }
  export type IResponse = Array<{
    id: number;
    name: string;
    email: string;
    cpf: string;
    birthday: string;
    createdAt: string;
    updatedAt: string;
  }>;
}

export namespace GetUserDTO {
  export interface IParams {
    userId: number;
  }
  export interface IResponse {
    id: number;
    name: string;
    email: string;
    cpf: string;
    birthday: string;
    addresses: Array<{
      id: number;
      street: string;
      number: string;
      complement: string;
      neighborhood: string;
      city: string;
      state: string;
      country: string;
      zip_code: string;
    }>;
    createdAt: string;
    updatedAt: string;
  }
}

export namespace CreateUserDTO {
  export interface IRequest {
    name: string;
    email: string;
    cpf: string;
    birthday: string;
    addresses_attributes: Array<{
      street: string;
      number: string;
      complement?: string;
      neighborhood: string;
      city: string;
      state: string;
      country: string;
      zip_code: string;
    }>;
  }
  export interface IResponse {
    id: number;
    name: string;
    email: string;
    cpf: string;
    birthday: string;
    addresses: Array<{
      id: number;
      street: string;
      number: string;
      complement: string | undefined;
      neighborhood: string;
      city: string;
      state: string;
      country: string;
      zip_code: string;
    }>;
    createdAt: string;
    updatedAt: string;
  }
}

export namespace UpdateUserDTO {
  export interface IParams {
    userId: number;
  }
  export interface IRequest {
    name?: string;
    email?: string;
    cpf?: string;
    birthday?: string;
    addresses_attributes?: Array<{
      id?: number;
      street?: string;
      number?: string;
      complement?: string;
      neighborhood?: string;
      city?: string;
      state?: string;
      country?: string;
      zip_code?: string;
      _destroy?: boolean;
    }>;
  }
  export interface IResponse {
    id: number;
    name: string;
    email: string;
    cpf: string;
    birthday: string;
    addresses: Array<{
      id: number;
      street: string;
      number: string;
      complement: string | undefined;
      neighborhood: string;
      city: string;
      state: string;
      country: string;
      zip_code: string;
    }>;
    createdAt: string;
    updatedAt: string;
  }
}

export namespace DeleteUserDTO {
  export interface IParams {
    userId: number;
  }
}

export namespace CheckEmailDTO {
  export interface IParams {
    email: string;
  }
  export type IResponse = {
    message: string;
  };
}

export namespace CheckCpfDTO {
  export interface IParams {
    cpf: string;
  }
  export type IResponse = {
    message: string;
  };
}
