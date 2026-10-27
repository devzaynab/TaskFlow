
function TaskItem({ task, onToggleTask }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 transition hover:bg-slate-50">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
        className="h-4 w-4 cursor-pointer accent-indigo-600"
      />

      <span
        className={`flex-1 ${
          task.completed
            ? "text-slate-400 line-through"
            : "text-slate-700"
        }`}
      >
        {task.title}
      </span>
    </div>
  );
}

export default TaskItem;
