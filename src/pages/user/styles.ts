import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  padding: 20px 2%;
  margin: 2% 0;
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const FormContainer = styled.div`
  max-width: 800px;
  margin: 5% auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #555;
`;

export const LoadingMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: #777;
`;

export const AddressSection = styled.div`
  margin-top: 20px;
`;

export const AddressCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background: #fff;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #333;

  strong {
    font-weight: bold;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
