import styled from 'styled-components';

const STaskContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SLabel = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`

const SHiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const SCustomCheckbox = styled.label<{ isCompleted: boolean }>`
  width: 30px;
  height: 30px;
  border: 2px solid ${({ isCompleted }) => (isCompleted ? 'green' : '#ccc')};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    width: 12px;
    height: 6px;
    border: solid transparent;
    border-width: 0 0 2px 2px;
    border-color: ${({ isCompleted }) => (isCompleted ? 'green' : 'transparent')};
    transform: rotate(-45deg);
    opacity: ${({ isCompleted }) => (isCompleted ? 1 : 0)};
    transition: opacity 0.2s;
  }
`;

const STaskText = styled.span<{ isCompleted: boolean }>`
  flex: 1;
  text-decoration: ${({ isCompleted }) => (isCompleted ? 'line-through' : 'none')};
`;

const SDeleteButton = styled.button`
  border: none;
  background-color: transparent;
  color: red;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  STaskContainer,
  SCustomCheckbox,
  SHiddenCheckbox,
  STaskText,
  SDeleteButton,
  SLabel
}