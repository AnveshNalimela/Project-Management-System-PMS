import React from "react";
import "./TaskCard.css";

interface TaskCardProps {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName?: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  dueDate,
  completedAtDate,
  assigneeName,
}) => {
  return (
    <div className="task-card">
      <h2 className="text-xl font-semibold">{title}</h2>
      {assigneeName && <p>Assignee: {assigneeName}</p>}
      {dueDate && <p>Due on: {dueDate}</p>}
      {completedAtDate && <p>Completed on: {completedAtDate}</p>}
    </div>
  );
};

export default TaskCard;
