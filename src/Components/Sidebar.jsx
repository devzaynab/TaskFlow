
function Sidebar() {
  return (
    <aside className="w-full border-b border-slate-200 bg-white p-5 md:min-h-screen md:w-60 md:border-b-0 md:border-r">
      <h1 className="text-2xl font-bold text-indigo-600">
        TaskFlow
      </h1>

      <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Workspace
      </p>

      <nav className="mt-4 space-y-2">
        <a
          href="#dashboard"
          className="block rounded-lg bg-indigo-50 px-4 py-3 font-medium text-indigo-700"
        >
          Dashboard
        </a>

        <a
          href="#all-tasks"
          className="block rounded-lg px-4 py-3 text-slate-600 transition hover:bg-slate-100"
        >
          All tasks
        </a>

        <a
          href="#pending"
          className="block rounded-lg px-4 py-3 text-slate-600 transition hover:bg-slate-100"
        >
          Pending
        </a>

        <a
          href="#completed"
          className="block rounded-lg px-4 py-3 text-slate-600 transition hover:bg-slate-100"
        >
          Completed
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
