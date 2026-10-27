
function TaskForm({ taskInput, setTaskInput, onAddTask }) {
  return (
    <form onSubmit={onAddTask} className="mt-4 flex gap-3">
      <input
        type="text"
        value={taskInput}
        onChange={(event) => setTaskInput(event.target.value)}
        placeholder="What do you need to do?"
        className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
      />

      <button
        type="submit"
        className="rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700"
      >
        Add task
      </button>
    </form>
  );
}

export default TaskForm;
