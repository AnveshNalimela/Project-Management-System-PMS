import "./TaskCard.css";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { TaskItem } from "./types";

const Task = (props: TaskItem) => {
  const [tasks, setTasks] = useLocalStorage<TaskItem[]>("tasks", []);

  const handleDelete = () => {
    const updatedTasks = tasks.filter((task) => task.id !== props.id);
    // Update the tasks in local storage
    setTasks(updatedTasks);
  };

  return (
    <li className="flex w-fit">
      <div className="TaskItem shadow-md border px-5 bg-white border-slate-200">
        <div className="flex">
          <h2 className="text-xl font-bold my-1">{props.title}</h2>
          <button
            onClick={handleDelete}
            className="ml-10 p-2 deleteTaskButton rounded hover:bg-gray-300 transition duration-300 ease-in-out"
          >
            <img
              className="w-5 h-5 rounded ml-30"
              src="https://th.bing.com/th/id/OIP.ND2whs9x2Ue_Is03JmgwGwHaJG?w=798&h=981&rs=1&pid=ImgDetMain"
            />
          </button>
        </div>

        <p className="text-lg text-gray-500">
          {" "}
          <strong>Due date:</strong>
          {props.dueDate}
        </p>
        <p className="text-lg text-gray-500">Description:{props.description}</p>
      </div>
    </li>
  );
};

export default Task;
