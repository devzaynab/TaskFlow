function TaskItem({ task }) {
  return (
    <div className="rounded-lg border border-slate-200 px-4 py-3">
      {task.title}
    </div>
  );
}

export default TaskItem;