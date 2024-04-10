import React from "react";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { TaskItem } from "../types";

interface TaskDetailsPageParams extends Record<string, string> {
  id: string;
}

interface TaskAppState {
  tasks: TaskItem[];
}

const TaskDetailsPage: React.FC = () => {
  const { id } = useParams<TaskDetailsPageParams>();
  const [taskAppState] = useLocalStorage<TaskAppState>("tasks", {
    tasks: [],
  });

  let num: number = Number(id);
  if (num < Number(taskAppState.tasks.length)) {
    const task = taskAppState.tasks[num];
    return (
      <div className="bg-white shadow-md rounded-md p-4 m-8">
        <div className="justify-between items-center mb-4">
          <h3 className="text-lg font-medium">{task?.title}</h3>

          <p className="text-gray-600">{task?.description}</p>
          <p className="text-gray-600">{task?.dueDate}</p>
        </div>
      </div>
    );
  } else {
    window.location.href = "/notfound";
  }
};

export default TaskDetailsPage;
