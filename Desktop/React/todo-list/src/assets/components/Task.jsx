import React from "react";

export default function Task({ task, setTasks }) {
  return (
    <div>
      <input type="checkbox" />
      <span className="text">{task.text}</span>
    </div>
  );
}
