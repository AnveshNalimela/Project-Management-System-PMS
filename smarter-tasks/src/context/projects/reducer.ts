interface Project {
  id: number;
  name: string;
}

// Define the initial state
export const initialState: ProjectsState = {
  projects: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};
export interface ProjectsState {
  projects: Project[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

// Next, I'll comment the `Action` interface

// interface Action {
//   type: string;
//   payload?: any;
// }

// Then I'll define a new type called `ProjectsActions`
// for all possible combimations of action objects.

// Define the action types and payload

// export type ProjectsActions =
//   | { type: 'API_CALL_START' }
//   | { type: 'API_CALL_END'; payload: Project[] }
//   | { type: 'API_CALL_ERROR'; payload: string }
export type ProjectsActions =
  | { type: "FETCH_PROJECTS_REQUEST" }
  | { type: "FETCH_PROJECTS_SUCCESS"; payload: Project[] }
  | { type: "FETCH_PROJECTS_FAILURE"; payload: string }
  | { type: "ADD_PROJECT_SUCCESS"; payload: Project };

export const reducer = (
  state: ProjectsState = initialState,
  action: ProjectsActions
): ProjectsState => {
  switch (action.type) {
    case "FETCH_PROJECTS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_PROJECTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        projects: action.payload,
      };
    case "FETCH_PROJECTS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case "ADD_PROJECT_SUCCESS":
      // Here I'll insert new new project object, which is coming in this
      // `action.payload`, to the `projects` array present in state.
      return { ...state, projects: [...state.projects, action.payload] };
    default:
      return state;
  }
};
