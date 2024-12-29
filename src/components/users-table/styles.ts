import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const Title = styled.h2`
  text-align: center;
  color: #2c3e50;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  margin-right: 10px;
`;

export const SearchButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHeader = styled.th`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: 600;
`;

export const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  color: #2c3e50;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #f4f4f4;
  }
`;

export const NoDataMessage = styled.div`
  text-align: center;
  color: #e74c3c;
  font-size: 18px;
`;

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }

  svg {
    color: ${(props) => props.theme.colors.primary};
  }

  &:nth-child(2) svg {
    color: ${(props) => props.theme.colors.edit};
  }

  &:nth-child(3) svg {
    color: ${(props) => props.theme.colors.delete};
  }
`;
