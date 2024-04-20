// src/context/projects/actions.ts
import { API_ENDPOINT } from '../../config/constants';
export const fetchProjects = async (dispatch: any) => {
  const token = localStorage.getItem("authToken") ?? "";
  
  try {
    dispatch({ type: "FETCH_PROJECTS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/projects`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch({ type: "FETCH_PROJECTS_SUCCESS", payload: data });
  } catch (error) {
    console.log('Error fetching projects:', error);
    dispatch({ type: "FETCH_PROJECTS_FAILURE", payload: 'Unable to load projects' });
  }
};