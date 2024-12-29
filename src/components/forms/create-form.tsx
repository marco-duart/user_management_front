import React, { useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as S from "./styles";
import { z } from "zod";
import { SuccessModal } from "../modals/success-modal";
import { useCheck } from "../../hooks/";
import { cpf as cpfValidator } from "cpf-cnpj-validator";
import { useNavigate } from "react-router-dom";

const userSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  cpf: z.string().refine((value) => cpfValidator.isValid(value), {
    message: "CPF inválido",
  }),
  birthday: z
    .string()
    .nonempty({ message: "Data de Nascimento é obrigatória" }),
  addresses_attributes: z
    .array(
      z.object({
        street: z.string().min(1, { message: "Rua é obrigatória" }),
        number: z.string().min(1, { message: "Número é obrigatório" }),
        complement: z.string().optional(),
        neighborhood: z.string().min(1, { message: "Bairro é obrigatório" }),
        city: z.string().min(1, { message: "Cidade é obrigatória" }),
        state: z.string().min(1, { message: "Estado é obrigatório" }),
        country: z.string().min(1, { message: "País é obrigatório" }),
        zip_code: z.string().min(1, { message: "CEP é obrigatório" }),
      })
    )
    .min(1, { message: "Pelo menos um endereço é obrigatório" }),
});

const BaseAppend = {
  street: "",
  number: "",
  complement: "",
  neighborhood: "",
  city: "",
  state: "",
  country: "",
  zip_code: "",
};

type FormValues = z.infer<typeof userSchema>;

interface Props {
  onSubmit: (data: FormValues) => Promise<void>;
  loading: boolean;
}

export const CreateForm: React.FC<Props> = ({ onSubmit, loading }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const { checkEmail, checkCpf, emailError, cpfError } = useCheck(false);

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      cpf: "",
      birthday: "",
      addresses_attributes: [BaseAppend],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "addresses_attributes",
  });

  const handleFormSubmit = async (data: FormValues) => {
    await onSubmit(data);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    navigate("/users");
  };

  return (
    <>
      <SuccessModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        message="Usuário criado com sucesso!"
      />
      <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
        <S.Label>
          Nome:
          <Controller
            name="name"
            control={control}
            render={({ field }) => <S.Input {...field} />}
          />
          {errors.name && (
            <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>
          )}
        </S.Label>

        <S.Label>
          Email:
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <S.Input
                type="email"
                {...field}
                onBlur={() => checkEmail(field.value)}
              />
            )}
          />
          {emailError && <S.ErrorMessage>{emailError}</S.ErrorMessage>}
          {errors.email && (
            <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
          )}
        </S.Label>

        <S.Label>
          CPF:
          <Controller
            name="cpf"
            control={control}
            render={({ field }) => (
              <S.Input
                {...field}
                maxLength={11}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  field.onChange(value);
                }}
                onBlur={() => checkCpf(field.value)}
              />
            )}
          />
          {cpfError && <S.ErrorMessage>{cpfError}</S.ErrorMessage>}
          {errors.cpf && <S.ErrorMessage>{errors.cpf.message}</S.ErrorMessage>}
        </S.Label>

        <S.Label>
          Data de Nascimento:
          <Controller
            name="birthday"
            control={control}
            render={({ field }) => <S.Input type="date" {...field} />}
          />
          {errors.birthday && (
            <S.ErrorMessage>{errors.birthday.message}</S.ErrorMessage>
          )}
        </S.Label>

        <S.SubTitle>Endereço(s)</S.SubTitle>
        {fields.map((field, index) => (
          <S.AddressCard key={field.id}>
            <S.Label>
              Rua:
              <Controller
                name={`addresses_attributes.${index}.street`}
                control={control}
                render={({ field }) => <S.Input {...field} />}
              />
              {errors?.addresses_attributes?.[index]?.street && (
                <S.ErrorMessage>
                  {errors.addresses_attributes[index]?.street?.message}
                </S.ErrorMessage>
              )}
            </S.Label>

            <S.Label>
              Número:
              <Controller
                name={`addresses_attributes.${index}.number`}
                control={control}
                render={({ field }) => <S.Input {...field} />}
              />
              {errors?.addresses_attributes?.[index]?.number && (
                <S.ErrorMessage>
                  {errors.addresses_attributes[index]?.number?.message}
                </S.ErrorMessage>
              )}
            </S.Label>

            <S.Label>
              Complemento:
              <Controller
                name={`addresses_attributes.${index}.complement`}
                control={control}
                render={({ field }) => <S.Input {...field} />}
              />
            </S.Label>

            <S.Label>
              Bairro:
              <Controller
                name={`addresses_attributes.${index}.neighborhood`}
                control={control}
                render={({ field }) => <S.Input {...field} />}
              />
              {errors?.addresses_attributes?.[index]?.neighborhood && (
                <S.ErrorMessage>
                  {errors.addresses_attributes[index]?.neighborhood?.message}
                </S.ErrorMessage>
              )}
            </S.Label>

            <S.Label>
              Cidade:
              <Controller
                name={`addresses_attributes.${index}.city`}
                control={control}
                render={({ field }) => <S.Input {...field} />}
              />
              {errors?.addresses_attributes?.[index]?.city && (
                <S.ErrorMessage>
                  {errors.addresses_attributes[index]?.city?.message}
                </S.ErrorMessage>
              )}
            </S.Label>

            <S.Label>
              Estado:
              <Controller
                name={`addresses_attributes.${index}.state`}
                control={control}
                render={({ field }) => <S.Input {...field} />}
              />
              {errors?.addresses_attributes?.[index]?.state && (
                <S.ErrorMessage>
                  {errors.addresses_attributes[index]?.state?.message}
                </S.ErrorMessage>
              )}
            </S.Label>

            <S.Label>
              País:
              <Controller
                name={`addresses_attributes.${index}.country`}
                control={control}
                render={({ field }) => <S.Input {...field} />}
              />
              {errors?.addresses_attributes?.[index]?.country && (
                <S.ErrorMessage>
                  {errors.addresses_attributes[index]?.country?.message}
                </S.ErrorMessage>
              )}
            </S.Label>

            <S.Label>
              CEP:
              <Controller
                name={`addresses_attributes.${index}.zip_code`}
                control={control}
                render={({ field }) => (
                  <S.Input
                    {...field}
                    maxLength={9}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      const formatted = value.replace(
                        /^(\d{5})(\d{1,3})?$/,
                        "$1-$2"
                      );
                      field.onChange(formatted);
                    }}
                  />
                )}
              />
              {errors?.addresses_attributes?.[index]?.zip_code && (
                <S.ErrorMessage>
                  {errors.addresses_attributes[index]?.zip_code?.message}
                </S.ErrorMessage>
              )}
            </S.Label>

            {fields.length > 1 && (
              <S.RemoveButton onClick={() => remove(index)}>
                Remover
              </S.RemoveButton>
            )}
          </S.AddressCard>
        ))}
        <S.AddButton onClick={() => append(BaseAppend)}>
          Adicionar Endereço
        </S.AddButton>

        <S.SaveButton type="submit" disabled={loading}>
          {loading ? "Salvando..." : "Salvar"}
        </S.SaveButton>
      </S.Form>
    </>
  );
};
