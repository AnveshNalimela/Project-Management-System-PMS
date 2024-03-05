import TaskCard from "./TaskCard";
import "./index.css";

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
            date="10th April" assinge="Rohit S" status="Due on"
          />
          <TaskCard title="Add blog" date="22th March" assinge="Rohit P" status="Due on" />
        </div>
        <div  className="border-4 p-5 mx-10 border-black w-1/4 rounded " >
          <h1 className="text-2xl m-2 font-bold ">Done</h1>
          <TaskCard title="Design the mockup " date="10th April" assinge="Rohit M"  status="Completed on"/>
          <TaskCard title="Get approval from principal" date="22th March" assinge="Ajay S" status="Completed on"  />
        </div>
      </div>
    </div>
  );
}

export default App;
