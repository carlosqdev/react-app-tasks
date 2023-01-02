import Task from '../Task';

export default function TaksList ({ tasks, removeTask }) {
  return (
    <section className='bg-slate-900 mt-2 rounded-sm pt-2 p-2'>
      <h2 className='text-slate-50 font-semibold text-lg text-center'>Mis tareas</h2>

      {tasks?.length === 0 && <p className='font-medium text-center text-gray-400'>No tienes ninguna tarea</p>}

      <ul className='grid gap-1'>
        {tasks?.map((task) => (
          <Task key={task} taskName={task} removeTask={removeTask} />
        ))}
      </ul>

    </section>
  );
}