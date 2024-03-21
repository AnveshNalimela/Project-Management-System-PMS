import React from "react";
interface TaskFormProps {}
interface TaskFormState {}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Submitted the form!");
  };
  render() {
    return (
      <div>
        <h2>Task form</h2>
        <form onSubmit={this.addTask}>
          <input type="text" />
          <button type="submit">Add item</button>
        </form>
      </div>
    );
  }
}
export default TaskForm;
