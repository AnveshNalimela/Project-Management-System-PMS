import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { TaskItem } from "./types";

interface TaskAppProp {}
interface TaskAppState {
  tasks: TaskItem[];
}

class TaskApp extends React.Component<TaskAppProp, TaskAppState> {
  constructor(props: TaskAppProp) {
    super(props);
    this.state = {
      tasks: [],
    };
  }
  addTask = (task: TaskItem) => {
    this.setState((state) => {
      return {
        tasks: [...state.tasks, task],
      };
    });
  };

  render() {
    return (
      <div className="container bg-blue-400 px-10 py-10 max-w-4xl h-screen mx-auto">
        <h1 className="text-5xl mb-2 font-bold text-slate-700">
          Smarter Tasks
        </h1>
        <h1 className="text-xl mb-6 text-slate-600">
          <span className="font-bold">Project: </span>
          Graduation Final Year Project (Revamp college website)
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-slate-200 bg-blue-400 rounded-xl  p-4">
            <h1 className="text-slate-700 text-2xl font-bold text-center mb-2">
              Pending
            </h1>
            <TaskForm addTask={this.addTask} />
            <TaskList tasks={this.state.tasks} />
          </div>
        </div>
      </div>
    );
  }
}

export default TaskApp;
