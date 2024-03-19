import "./TaskCard.css";

const TaskCard = (props) => {
  return (
    <div className="TaskItem">
      <h2 className="text-xl font-semibold"> {props.title} </h2>
      <p>
        {props.status} : {props.date}
      </p>
      <p>Assignee : {props.assinge}</p>
    </div>
  );
};

export default TaskCard;
