import { useState, useEffect } from "react";
import { cpf as cpfValidator } from "cpf-cnpj-validator";
import { CheckEmail, CheckCPF } from "../../services/user";

export const useCheck = (
  isEdit: boolean,
  currentEmail: string = "",
  currentCpf: string = ""
) => {
  const [emailError, setEmailError] = useState<string | null>(null);
  const [cpfError, setCpfError] = useState<string | null>(null);

  useEffect(() => {
    if (isEdit) {
      setEmailError(null);
      setCpfError(null);
    }
  }, [isEdit]);

  const checkEmail = async (email: string) => {
    if (isEdit && email === currentEmail) {
      setEmailError(null);
      return true;
    }

    try {
      const response = await CheckEmail({ email });

      if (response.success) {
        setEmailError(null);
      } else {
        setEmailError(response.message);
      }

      return response.success;
    } catch (error) {
      setEmailError("Erro ao verificar o e-mail");
      return false;
    }
  };

  const checkCpf = async (cpf: string) => {
    if (isEdit && cpf === currentCpf) {
      setCpfError(null);
      return true;
    }

    if (!cpfValidator.isValid(cpf)) {
      setCpfError("CPF inválido");
      return false;
    }

    try {
      const response = await CheckCPF({ cpf });

      if (response.success) {
        setCpfError(null);
      } else {
        setCpfError(response.message);
      }

      return response.success;
    } catch (error) {
      setCpfError("Erro ao verificar o CPF");
      return false;
    }
  };

  return {
    checkEmail,
    checkCpf,
    emailError,
    cpfError,
  };
};
