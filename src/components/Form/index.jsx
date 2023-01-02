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
    <form onSubmit={onSubmit} className='bg-slate-900 p-2 rounded-sm mt-2'>

      <div className='flex flex-col'>
        <label className='text-slate-50 font-light' htmlFor="nameTask">Nombre de la tarea:</label>

        <div className='flex justify-between'>
          <input
          type="text"
          value={nameTask}
          onChange={(event) => setNameTask(event.target.value)}
          name="nameTask"
          id="nameTask"
          placeholder='Mi tarea'
          className='rounded-sm p-1 text-base font-light text-slate-900 outline-none w-full' />

          <button className='rounded-sm bg-slate-600 hover:bg-slate-700 p-1 font-light text-slate-50 pl-2 pr-2'>Guardar</button>
        </div>
      </div>

      {showWarning && <p className='text-red-600 font-light'>Antes de guardar escribe el nombre de una tarea.</p> }
    </form>
  );
}