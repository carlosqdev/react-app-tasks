import { useState } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import TaksList from './components/TaskList';

function App() {
  // Hooks
  const [tasks, setTasks] = useState([]);

  // My functions
  function addTask (task) {
    setTasks([...tasks, task]);
  }

  function removeTask (taskToDelete) {
    setTasks(
      tasks.filter(task => task !== taskToDelete)
    );
  }

  return (
    <>
      <Header />
      <Form addTask={addTask} />
      <TaksList tasks={tasks} removeTask={removeTask} />
    </>
  )
}

export default App
