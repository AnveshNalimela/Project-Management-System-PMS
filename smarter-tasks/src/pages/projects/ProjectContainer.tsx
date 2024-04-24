import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { fetchProjects } from "../../context/projects/actions";
import { useProjectsDispatch } from "../../context/projects/context";

const ProjectContainer = () => {
  const projectDispatch = useProjectsDispatch();
  useEffect(() => {
    fetchProjects(projectDispatch);
  }, [projectDispatch]);
  return <Outlet />;
};

export default ProjectContainer;
