import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { TaskItem } from "./types";

interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp = () => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    {
      tasks: [],
    }
  );

  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };
  const deleteTask = (idx: number) => {
    const updatedTasks = [...taskAppState.tasks];
    updatedTasks.splice(idx, 1);
    setTaskAppState({ tasks: updatedTasks });
  };

  return (
    <div className="container bg-blue-400 px-10 py-10 max-w-4xl h-screen mx-auto">
      <h1 className="text-5xl mb-2 font-bold text-slate-700">Smarter Tasks</h1>
      <h1 className="text-xl mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (Revamp college website)
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-200 bg-blue-400 rounded-xl  p-4">
          <h1 className="text-slate-700 text-2xl font-bold text-center mb-2">
            Pending
          </h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={taskAppState.tasks} onDelete={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
