import { useState } from 'react';

export default function Form ({ addTask }) {
  // Hooks
  const [nameTask, setNameTask] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  // My functions
  function onSubmit(event) {
    event.preventDefault();

    if (nameTask.trim().length > 0) {
      addTask(nameTask);
      setNameTask('');
      setShowWarning(false);
    }

    if (!nameTask.trim().length > 0) {
      setShowWarning(true);
    }

  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="nameTask">Nombre de la tarea:</label>

      <input
        type="text"
        value={nameTask}
        onChange={(event) => setNameTask(event.target.value)}
        name="nameTask"
        id="nameTask" />

      <button>Guardar</button>

      {showWarning && <p>Antes de guardar escribe el nombre de una tarea.</p> }

    </form>
  );
}