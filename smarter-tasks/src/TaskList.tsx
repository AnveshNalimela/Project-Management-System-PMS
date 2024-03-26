import Task from "./Task";
import { TaskItem } from "./types.ts";
interface Props {
  tasks: TaskItem[];
}

const TaskList = (Props: Props) => {
  return Props.tasks.map((task, idx) => (
    <Task
      key={idx}
      title={task.title}
      description={task.description}
      dueDate={task.dueDate}
    />
  ));
};

export default TaskList;
