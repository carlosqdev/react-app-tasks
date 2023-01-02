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
    <div className='bg-slate-500 h-screen flex'>
      <div className=' w-11/12 m-auto lg:max-w-md bg-slate-700 p-2 rounded-md shadow-lg'>
        <Header />
        <Form addTask={addTask} />
        <TaksList tasks={tasks} removeTask={removeTask} />
      </div>
    </div>
  )
}

export default App
