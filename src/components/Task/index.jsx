export default function Task ({ taskName, removeTask }) {
  return (
    <li>
      <p>{taskName}</p>
      <button
        onClick={() => removeTask(taskName)}
        type='button'>Quitar de mi lista</button>
    </li>
  );
}