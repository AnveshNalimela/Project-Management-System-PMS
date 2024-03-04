import TaskCard from "./TaskCard";
import "./index.css";

function App() {
  return (
    <div>
      <h1>Smarter Tasks</h1>
      <p className="text-3xl">
        <strong>Project:</strong>Graduation Final year Project(Revamp college
        Website)
      </p>
      <div className="flex">
        <div>
          <h1>Pending</h1>
          <TaskCard
            title="Build the website with static content"
            date="12th April"
          />
          <TaskCard title="Add blog" date="12th April" />
        </div>
        <div>
          <h1>Done</h1>
          <TaskCard title="design the mockup " date="12th April" />
          <TaskCard title="get approval from principal" date="12th April" />
        </div>
      </div>
    </div>
  );
}

export default App;
