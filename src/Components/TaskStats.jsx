
function TaskStats({ tasks }) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  const stats = [
    {
      label: "Total tasks",
      count: totalTasks,
      color: "text-indigo-600",
      background: "bg-indigo-50",
    },
    {
      label: "Pending",
      count: pendingTasks,
      color: "text-amber-600",
      background: "bg-amber-50",
    },
    {
      label: "Completed",
      count: completedTasks,
      color: "text-emerald-600",
      background: "bg-emerald-50",
    },
  ];

  return (
    <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <p className="text-sm text-slate-500">
            {stat.label}
          </p>

          <div
            className={`mt-3 inline-flex rounded-lg ${stat.background} px-3 py-2`}
          >
            <span className={`text-2xl font-bold ${stat.color}`}>
              {stat.count}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskStats;
