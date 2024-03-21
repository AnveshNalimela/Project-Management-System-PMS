import React from "react";
import "./TaskCard.css";
interface TaskProp {
  title: string;
}

class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem shadow-md border bg-white border-slate-200">
        <h2 className="text-base font-bold my-1">{this.props.title}</h2>
        <p className="text-sm text-gray-500">Due Date:</p>
        <p className="text-sm text-gray-500">Description:</p>
      </div>
    );
  }
}

export default Task;
