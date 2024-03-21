import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
    };
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
    };
    this.props.addTask(newTask);
    this.setState({ title: "" });
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };

  render() {
    return (
      <div>
        <h2 className="text-lg font-semibold text-white">Task form</h2>
        <form onSubmit={this.addTask}>
          <input
            className="rounded mr-5 px-5 text-lg w-100 h-10"
            type="text"
            value={this.state.title}
            onChange={this.titleChanged}
          />
          <button
            className="bg-green-300 rounded text-bold text-white w-25 h-10 px-3 hover:bg-green-500"
            type="submit"
          >
            Add item
          </button>
        </form>
      </div>
    );
  }
}
export default TaskForm;
