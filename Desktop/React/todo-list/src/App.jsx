import { useState } from "react";
import Header from "./assets/components/Header";

export default function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="main">
      <Header tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
