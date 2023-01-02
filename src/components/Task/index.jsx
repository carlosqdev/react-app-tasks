export default function Task ({ taskName, removeTask }) {
  return (
    <li className='bg-slate-600 rounded-sm flex justify-between items-center pt-2 pb-2 pl-1 pr-1'>
      <p className='text-slate-50 font-normal text-base'>{taskName}</p>
      <button
        onClick={() => removeTask(taskName)}
        className='bg-red-600 hover:bg-red-700 p-1 text-slate-50 rounded-sm'
        type='button'>Quitar de mi lista</button>
    </li>
  );
}