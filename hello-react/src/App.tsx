import TaskCard from "./TaskCard";
import "./index.css";

interface Task {
  title: string;
  dueDate: string;
  completedAtDate: string;
  assignee: string;
}

function App() {
  return (
    <div>
      <h1 className="text-5xl  m-3 p-2  font-bold">Smarter Tasks</h1>
      <p className="text-xl mx-3 p-2">
        <strong>Project:</strong>Graduation Final year Project(Revamp college
        Website)
      </p>
      <div className="flex mx-10 my-3">
        <div className="border-4 p-5 ml-10 border-black w-1/4 rounded ">
          <h1 className="text-2xl m-2 font-bold ">Pending</h1>
          <TaskCard
            title="Build the website with static content"
            dueDate="10th April"
            assigneeName="Rohit S"
          />
          <TaskCard
            title="Add blog"
            dueDate="22th March"
            assigneeName="Rohit P"
          />
        </div>
        <div className="border-4 p-5 mx-10 border-black w-1/4 rounded ">
          <h1 className="text-2xl m-2 font-bold ">Done</h1>
          <TaskCard
            title="Design the mockup "
            completedAtDate="10th April"
            assigneeName="Rohit M"
          />
          <TaskCard
            title="Get approval from principal"
            completedAtDate="22th March"
            assigneeName="Ajay S"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
