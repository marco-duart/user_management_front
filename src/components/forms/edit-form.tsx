import React, { useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as S from "./styles";
import { z } from "zod";
import { cpf as cpfValidator } from "cpf-cnpj-validator";
import { useCheck } from "../../hooks/";

const userSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  cpf: z.string().refine((value) => cpfValidator.isValid(value), {
    message: "CPF inválido",
  }),
  birthday: z
    .string()
    .nonempty({ message: "Data de Nascimento é obrigatória" }),
  addresses: z.array(
    z.object({
      id: z.coerce.number().optional(),
      street: z.string().min(1, { message: "Rua é obrigatória" }),
      number: z.string().min(1, { message: "Número é obrigatório" }),
      complement: z
        .string()
        .optional()
        .nullable()
        .transform((value) => value || ""),
      neighborhood: z.string().min(1, { message: "Bairro é obrigatório" }),
      city: z.string().min(1, { message: "Cidade é obrigatória" }),
      state: z.string().min(1, { message: "Estado é obrigatório" }),
      country: z.string().min(1, { message: "País é obrigatório" }),
      zip_code: z.string().min(1, { message: "CEP é obrigatório" }),
      _destroy: z.boolean().optional(),
    })
  ),
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
  _destroy: false,
};

type FormValues = z.infer<typeof userSchema>;

interface Props {
  defaultValues?: FormValues;
  onSubmit: (data: FormValues) => void;
  loading: boolean;
}

export const EditForm: React.FC<Props> = ({
  defaultValues = {
    name: "",
    email: "",
    cpf: "",
    birthday: "",
    addresses: [],
  },
  onSubmit,
  loading,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(userSchema),
    defaultValues,
  });

  const { checkEmail, checkCpf, emailError, cpfError } = useCheck(
    true,
    defaultValues.email,
    defaultValues.cpf
  );

  const { fields, append } = useFieldArray({
    control,
    name: "addresses",
  });

  const [selectedForRemoval, setSelectedForRemoval] = useState<Set<number>>(
    new Set()
  );

  const handleFormSubmit = (data: FormValues) => {
    const updatedAddresses = data.addresses.map((address, index) => ({
      ...address,
      _destroy: selectedForRemoval.has(index),
    }));

    const transformedData = {
      ...data,
      addresses_attributes: updatedAddresses,
    };

    onSubmit(transformedData);
  };

  const handleToggleRemoveAddress = (index: number) => {
    const newSelection = new Set(selectedForRemoval);

    if (newSelection.has(index)) {
      newSelection.delete(index);
      setValue(`addresses.${index}._destroy`, false);
    } else {
      if (newSelection.size < fields.length - 1) {
        newSelection.add(index);
        setValue(`addresses.${index}._destroy`, true);
      }
    }

    setSelectedForRemoval(newSelection);
  };

  return (
    <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
      <S.Label>
        Nome:
        <Controller
          name="name"
          control={control}
          render={({ field }) => <S.Input {...field} />}
        />
        {errors.name && <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>}
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
        {errors.email && (
          <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
        )}
        {emailError && <S.ErrorMessage>{emailError}</S.ErrorMessage>}
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
        {errors.cpf && <S.ErrorMessage>{errors.cpf.message}</S.ErrorMessage>}
        {cpfError && <S.ErrorMessage>{cpfError}</S.ErrorMessage>}
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
        <S.AddressCard
          key={field.id}
          isMarkedForDeletion={selectedForRemoval.has(index)}
        >
          <S.Label>
            Rua:
            <Controller
              name={`addresses.${index}.street`}
              control={control}
              render={({ field }) => <S.Input {...field} />}
            />
            {errors?.addresses?.[index]?.street && (
              <S.ErrorMessage>
                {errors.addresses[index]?.street?.message}
              </S.ErrorMessage>
            )}
          </S.Label>
          <S.Label>
            Número:
            <Controller
              name={`addresses.${index}.number`}
              control={control}
              render={({ field }) => <S.Input {...field} />}
            />
            {errors?.addresses?.[index]?.number && (
              <S.ErrorMessage>
                {errors.addresses[index]?.number?.message}
              </S.ErrorMessage>
            )}
          </S.Label>
          <S.Label>
            Complemento:
            <Controller
              name={`addresses.${index}.complement`}
              control={control}
              render={({ field }) => <S.Input {...field} />}
            />
          </S.Label>
          <S.Label>
            Bairro:
            <Controller
              name={`addresses.${index}.neighborhood`}
              control={control}
              render={({ field }) => <S.Input {...field} />}
            />
            {errors?.addresses?.[index]?.neighborhood && (
              <S.ErrorMessage>
                {errors.addresses[index]?.neighborhood?.message}
              </S.ErrorMessage>
            )}
          </S.Label>
          <S.Label>
            Cidade:
            <Controller
              name={`addresses.${index}.city`}
              control={control}
              render={({ field }) => <S.Input {...field} />}
            />
            {errors?.addresses?.[index]?.city && (
              <S.ErrorMessage>
                {errors.addresses[index]?.city?.message}
              </S.ErrorMessage>
            )}
          </S.Label>
          <S.Label>
            Estado:
            <Controller
              name={`addresses.${index}.state`}
              control={control}
              render={({ field }) => <S.Input {...field} />}
            />
            {errors?.addresses?.[index]?.state && (
              <S.ErrorMessage>
                {errors.addresses[index]?.state?.message}
              </S.ErrorMessage>
            )}
          </S.Label>
          <S.Label>
            País:
            <Controller
              name={`addresses.${index}.country`}
              control={control}
              render={({ field }) => <S.Input {...field} />}
            />
            {errors?.addresses?.[index]?.country && (
              <S.ErrorMessage>
                {errors.addresses[index]?.country?.message}
              </S.ErrorMessage>
            )}
          </S.Label>
          <S.Label>
            CEP:
            <Controller
              name={`addresses.${index}.zip_code`}
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
            {errors?.addresses?.[index]?.zip_code && (
              <S.ErrorMessage>
                {errors.addresses[index]?.zip_code?.message}
              </S.ErrorMessage>
            )}
          </S.Label>
          <S.CheckboxLabel>
            <input
              type="checkbox"
              checked={selectedForRemoval.has(index)}
              onChange={() => handleToggleRemoveAddress(index)}
            />
            Marcar para remover
          </S.CheckboxLabel>
        </S.AddressCard>
      ))}

      <S.AddButton onClick={() => append(BaseAppend)}>
        Adicionar Endereço
      </S.AddButton>

      <S.SaveButton type="submit" disabled={loading}>
        {loading ? "Salvando..." : "Salvar"}
      </S.SaveButton>
    </S.Form>
  );
};
