import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
}

const TaskForm = (props: TaskFormProps) => {
  const [formState, setFormState] = React.useState<TaskFormState>({
    title: "",
    description: "",
    dueDate: "",
  });
  const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event: {
    target: { value: any };
  }) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, title: event.target.value });
  };
  const descriptionChanged: React.ChangeEventHandler<
    HTMLInputElement
  > = (event: { target: { value: any } }) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, description: event.target.value });
  };
  const dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event: {
    target: { value: any };
  }) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, dueDate: event.target.value });
  };

  const addTask: React.FormEventHandler<HTMLFormElement> = (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();
    console.log(`Submitted the form with`);
    if (formState.title.length === 0 || formState.dueDate.length === 0) {
      return;
    }

    props.addTask(formState);
    console.log("Submitted");
    setFormState({ title: "", description: "", dueDate: "" });
  };

  return (
    <>
      <div>
        <h2 className="text-lg font-semibold text-white">Task form</h2>
        <form onSubmit={addTask}>
          <input
            id="todoTitle"
            className="rounded mr-5 px-5 text-lg w-full mt-2 mb-4 h-10"
            type="text"
            placeholder="Enter the Task title"
            value={formState.title}
            onChange={titleChanged}
            required
          />
          <input
            id="todoDescription"
            className="rounded mr-5 px-4 py-2 text-lg w-full h-20  mb-4 "
            type="text"
            placeholder="Enter the Task description"
            value={formState.description}
            onChange={descriptionChanged}
          />
          <input
            id="todoDueDate"
            className="rounded mr-5 px-5 text-lg w-100 h-10"
            type="Date"
            value={formState.dueDate}
            onChange={dueDateChanged}
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
    </>
  );
};

export default TaskForm;
