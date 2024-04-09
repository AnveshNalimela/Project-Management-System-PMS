import Task from "./Task";
import { TaskItem } from "./types.ts";

interface Props {
  tasks: TaskItem[];
  onDelete: (idx: number) => void;
}

const TaskList = (props: Props) => {
  const handleDelete = (idx: number) => {
    props.onDelete(idx);
  };

  if (!props.tasks) {
    return <div className="ml-10 my-4 text-white">No tasks available</div>;
  } else {
    const tasklist = props.tasks.map((task, idx) => (
      <div
        key={idx}
        className="bg-white border-slate-200 shadow-md border mt-4 rounded"
      >
        <Task
          key={idx}
          id={idx}
          title={task.title}
          description={task.description}
          dueDate={task.dueDate}
        />
        <button
          onClick={() => handleDelete(idx)}
          className="ml-10 p-2 w-10 deleteTaskButton rounded hover:bg-gray-300 transition duration-300 ease-in-out"
        >
          <img
            className="w-5 h-5 rounded ml-30"
            src="https://th.bing.com/th/id/OIP.ND2whs9x2Ue_Is03JmgwGwHaJG?w=798&h=981&rs=1&pid=ImgDetMain"
          />
        </button>
      </div>
    ));
    return <ul>{tasklist}</ul>;
  }
};

export default TaskList;
