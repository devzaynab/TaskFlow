import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return (
      <p className="mt-6 text-sm text-slate-500">
        No tasks yet. Add your first task above!
      </p>
    );
  }

  return (
    <div className="mt-6 space-y-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;