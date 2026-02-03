import { useState } from "react";
import Task from "./Task";

export default function AddTask({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      text: newTask,
      isCompleted: false,
    };
    setTasks((prev) => [...prev, task]);
    setNewTask("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="tasks">
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button>Add</button>
      </form>
      <ul className="task-list">
        {tasks.map((task, index) => {
          return (
            <li key={index} className="task">
              <Task task={task} setTasks={setTasks} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
