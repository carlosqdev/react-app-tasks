import Task from '../Task';

export default function TaksList ({ tasks, removeTask }) {
  return (
    <section>
      <h2>Mis tareas</h2>

      {tasks?.length === 0 && <p>No tienes ninguna tarea</p>}

      <ul>
        {tasks?.map((task) => (
          <Task key={task} taskName={task} removeTask={removeTask} />
        ))}
      </ul>

    </section>
  );
}