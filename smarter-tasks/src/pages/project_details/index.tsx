import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary";
import { TasksProvider } from "../../context/task/context";

const ProjectDetails = React.lazy(() => import("./ProjectDetails"));

const ProjectDetailsIndex: React.FC = () => {
  return (
    <TasksProvider>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <ProjectDetails />
        </Suspense>
      </ErrorBoundary>

      <Outlet />
    </TasksProvider>
  );
};

export default ProjectDetailsIndex;
