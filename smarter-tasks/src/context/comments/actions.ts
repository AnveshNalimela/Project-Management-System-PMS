// src/context/projects/actions.ts
import { API_ENDPOINT } from "../../config/constants";
export const addTask = async (
    dispatch: TasksDispatch,
    projectID: string,
    task: TaskDetailsPayload
  ) => {
    const token = localStorage.getItem("authToken") ?? "";
    try {
      dispatch({ type: TaskListAvailableAction.CREATE_TASK_REQUEST });
      const response = await fetch(
        `${API_ENDPOINT}/projects/${projectID}/tasks/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(task),
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to create task");
      }
      dispatch({ type: TaskListAvailableAction.CREATE_TASK_SUCCESS });
      refreshTasks(dispatch, projectID);
    } catch (error) {
      console.error("Operation failed:", error);
      dispatch({
        type: TaskListAvailableAction.CREATE_TASK_FAILURE,
        payload: "Unable to create task",
      });
    }
  };
  