import React from "react";

export default function Task({ task, setTasks }) {
  const toggleCompleted = () => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t,
      ),
    );
  };
  return (
    <div>
      <input
        onChange={toggleCompleted}
        type="checkbox"
        checked={task.isCompleted}
      />
      <span className={task.isCompleted ? "text-line" : "text"}>
        {task.text}
      </span>
    </div>
  );
}
