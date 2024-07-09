import { styled } from "styled-components";

const SFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const SFilterButton = styled.button<{ selected: boolean }>`
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  background-color: ${({ selected }) => (selected ? '#007bff' : 'transparent')};
  color: ${({ selected }) => (selected ? 'white' : '#007bff')};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    color: white;
  }
`;

export {SFooterContainer, SFilterButton}