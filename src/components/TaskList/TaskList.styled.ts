import styled from 'styled-components';

const SForm = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const SButton = styled.button`
  padding: 10px 15px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;


export {
  SForm,
  SInput,
  SButton
}