import styled, { css } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #555;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #333;
`;

export const Input = styled.input`
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const AddressCard = styled.div<{ isMarkedForDeletion?: boolean }>`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background: #fff;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${(props) =>
    props.isMarkedForDeletion &&
    css`
      border-color: ${(props) => props.theme.colors.delete};
      background: #ffe6e6;
    `}
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
  margin-top: 5px;
`;

export const SaveButton = styled.button`
  background: ${(props) => props.theme.colors.save};
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`;

export const AddButton = styled.button`
  background: ${(props) => props.theme.colors.success};
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background: #218838;
  }
`;

export const RemoveButton = styled.button`
  align-self: flex-start;
  background: ${(props) => props.theme.colors.delete};
  color: white;
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: e04344;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;

  input[type="checkbox"] {
    margin-right: 8px;
  }
`;
