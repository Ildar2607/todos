import React, { memo } from 'react';
import { SCustomCheckbox, SDeleteButton, SHiddenCheckbox, STaskContainer, STaskText } from './TaskItem.styled';

interface TaskItemProps {
  task: string;
  isCompleted: boolean;
  toggleTask: () => void;
  deleteTask: () => void;
}

const TaskItem: React.FC<TaskItemProps> = memo(({ task, isCompleted, toggleTask, deleteTask }) => {
  return (
    <STaskContainer>
      <SHiddenCheckbox checked={isCompleted} onChange={toggleTask} id={`checkbox-${task}`} />
      <SCustomCheckbox isCompleted={isCompleted} htmlFor={`checkbox-${task}`} />
      <STaskText isCompleted={isCompleted}>{task}</STaskText>
      <SDeleteButton onClick={deleteTask}>Delete</SDeleteButton>
    </STaskContainer>
  );
});

export default TaskItem;
