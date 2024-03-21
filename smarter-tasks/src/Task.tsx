import React from "react";
interface TaskProp {
  title: string;
}

class Task extends React.Component<TaskProp> {
  render() {
    return <div className="text-2xl bg-blue-400 w-64">{this.props.title}</div>;
  }
}

export default Task;
