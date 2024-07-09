import React, { memo } from 'react';
import TaskItem from '../TaskItem/TaskItem';

interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
}

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = memo(({ tasks, toggleTask, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task.text}
          isCompleted={task.isCompleted}
          toggleTask={() => toggleTask(task.id)}
          deleteTask={() => deleteTask(task.id)}
        />
      ))}
    </div>
  );
});

export default TaskList;
