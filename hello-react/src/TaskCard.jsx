import "./TaskCard.css";


const TaskCard = (props) => {
  console.log(props);
  return (
    <div className="TaskItem">
      <h2 className="text-3xl font-bold">{props.title}</h2>
      <p >Completed on: due date...</p>
      <p>Assignee: name...</p>
    </div>
  );
};

export default TaskCard;
