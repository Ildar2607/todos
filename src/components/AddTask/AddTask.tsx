import React, { memo, useState } from 'react';
import { SButton, SForm, SInput } from './AddTask.styled';

interface AddTaskProps {
  addTask: (task: string) => void;
}

const AddTask: React.FC<AddTaskProps> = memo(({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <SForm onSubmit={handleSubmit}>
      <SInput
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="What needs to be done?"
      />
      <SButton type="submit">Add Task</SButton>
    </SForm>
  );
});

export default AddTask;
