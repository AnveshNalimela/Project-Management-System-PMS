import { API_ENDPOINT } from "../../config/constants";
const fetchProjects = async () => {
  const token = localStorage.getItem("authToken") ?? "";

  try {
    dispatch({ type: "API_CALL_START" });
    const response = await fetch(`${API_ENDPOINT}/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    dispatch({ type: "API_CALL_END", payload: data });
  } catch (error) {
    console.log("Error fetching projects:", error);
    dispatch({ type: "API_CALL_ERROR" });
  }
};
