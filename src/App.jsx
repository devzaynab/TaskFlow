import { useState } from "react";
import Header from "./Components/Header";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import Sidebar from "./Components/Sidebar";
import TaskStats from "./Components/TaskStats";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  
function handleToggleTask(taskId) {
  setTasks(
    tasks.map((task) =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
    )
  );
}


  function handleAddTask(event) {
    event.preventDefault();

    const title = taskInput.trim();

    if (title === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  }


return (
  <div className="min-h-screen bg-slate-50 text-slate-900 md:flex">
    <Sidebar />

    <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mb-8">
        <p className="mb-2 text-sm font-medium text-indigo-600">
          YOUR WORKSPACE
        </p>

        <h2 className="text-3xl font-bold tracking-tight">
          Manage your tasks
        </h2>

        <p className="mt-2 text-slate-500">
          Keep track of what matters and get things done.
        </p>
      </div>
          <TaskStats tasks={tasks} />
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <h3 className="text-lg font-semibold">Your tasks</h3>

        <TaskForm
          taskInput={taskInput}
          setTaskInput={setTaskInput}
          onAddTask={handleAddTask}
        />

        <TaskList
          tasks={tasks}
          onToggleTask={handleToggleTask}
        />
      </section>
    </main>
  </div>
);

}

export default App;