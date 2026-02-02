import AddTask from "./AddTask";

export default function Header({ tasks, setTasks }) {
  return (
    <>
      <div className="title">
        <div className="title-text">To Do List</div>
      </div>
      <AddTask tasks={tasks} setTasks={setTasks} />
    </>
  );
}
