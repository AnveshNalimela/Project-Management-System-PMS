import React, { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import NewProject from "./NewProject";
const ProjectList = React.lazy(() => import("./ProjectList"));

const SuspenseLoading = () => (
  <div className="suspense-loading">Loading...</div>
);
const Projects = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          Projects
        </h2>
        <NewProject />
      </div>
      <ErrorBoundary>
        <Suspense fallback={<SuspenseLoading />}>
          <ProjectList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Projects;
