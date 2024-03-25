import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
  description: string;
  duedate: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      duedate: "",
    };
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      duedate: this.state.duedate,
    };
    this.props.addTask(newTask);
    this.setState({ title: "", description: "" });
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value });
  };
  duedateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ duedate: event.target.value });
  };

  render() {
    return (
      <div>
        <h2 className="text-lg font-semibold text-white">Task form</h2>
        <form onSubmit={this.addTask}>
          <input
            id="todoTitle"
            className="rounded mr-5 px-5 text-lg w-full mt-2 mb-4 h-10"
            type="text"
            placeholder="Enter the Task title"
            value={this.state.title}
            onChange={this.titleChanged}
            required
          />
          <input
            id="todoDescription"
            className="rounded mr-5 px-4 py-2 text-lg w-full h-20  mb-4 "
            type="text"
            placeholder="Enter the Task description"
            value={this.state.description}
            onChange={this.descriptionChanged}
          />
          <input
            id="todoDueDate"
            className="rounded mr-5 px-5 text-lg w-100 h-10"
            type="Date"
            value={this.state.duedate}
            onChange={this.duedateChanged}
            required
          />
          <button
            id="addTaskButton"
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
