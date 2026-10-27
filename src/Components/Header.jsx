function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <h1 className="text-2xl font-bold text-indigo-600">
          TaskFlow
        </h1>

        <span className="text-sm text-slate-500">
          My workspace
        </span>
      </div>
    </header>
  );
}

export default Header;