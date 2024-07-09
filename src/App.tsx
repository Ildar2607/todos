import React, { useCallback, useState } from 'react';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import './App.css';

interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>('all');

  const addTask = useCallback((text: string) => {
    const newTask = { id: Date.now(), text, isCompleted: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }, []);

  const toggleTask = useCallback((id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)
    );
  }, []);

  const deleteTask = useCallback((id: number) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  }, []);

  const clearCompleted = useCallback(() => {
    setTasks((prevTasks) => prevTasks.filter(task => !task.isCompleted));
  }, []);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.isCompleted;
    if (filter === 'completed') return task.isCompleted;
    return true;
  });

  const activeTasksCount = tasks.filter(task => !task.isCompleted).length;

  return (
    <div className='App'>
      <h1 className="title">todos</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      <Footer
        activeTasksCount={activeTasksCount}
        filter={filter}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />
    </div>
  );
};

export default App;
