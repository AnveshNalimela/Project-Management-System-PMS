interface Project {
  id: number;
  name: string;
}
interface State {
  projects: Project[];
  isLoading: boolean;
}
interface Action {
  type: string;
  payload?: any;
}

const reducer = (state: State, action: Action): State => {
  // >>> Dialogue one: In switch statement, we will check the action type and return corresponsing state, like we were doing in the if-statements.
  switch (action.type) {
    case "API_CALL_START":
      return {
        ...state,
        isLoading: true,
      };
    case "API_CALL_END":
      return {
        ...state,
        isLoading: false,
        projects: action.payload,
      };
    case "API_CALL_ERROR":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
