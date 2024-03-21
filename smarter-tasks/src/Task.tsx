import React from "react";
import "./TaskCard.css";
interface TaskProp {
  title: string;
  description?: string;
  duedate: string;
}

class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem shadow-md border px-5 bg-white border-slate-200">
        <h2 className="text-xl font-bold my-1">{this.props.title}</h2>
        <p className="text-lg text-gray-500">
          {" "}
          <strong>Due date:</strong>
          {this.props.duedate}
        </p>
        <p className="text-lg text-gray-500">
          Description:{this.props.description}
        </p>
      </div>
    );
  }
}

export default Task;
