interface Member {
  id: number;
  email: string;
  password: string;
  name: string;
}
export interface MembersState {
  members: Member[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

// Define the initial state
export const initialState: MembersState = {
  members: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

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
export type MembersActions =
  | { type: "FETCH_MEMBERS_REQUEST" }
  | { type: "FETCH_MEMBERS_SUCCESS"; payload: Member[] }
  | { type: "FETCH_MEMBERS_FAILURE"; payload: string }
  | { type: "ADD_MEMBER_SUCCESS"; payload: Member }
  | { type: "DELETE_MEMBER"; payload: number };

export const reducer = (
  state: MembersState = initialState,
  action: MembersActions
): MembersState => {
  switch (action.type) {
    case "FETCH_MEMBERS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_MEMBERS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        members: action.payload,
      };
    case "FETCH_MEMBERS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case "ADD_MEMBER_SUCCESS":
      // Here I'll insert new new project object, which is coming in this
      // `action.payload`, to the `projects` array present in state.
      return { ...state, members: [...state.members, action.payload] };
    case "DELETE_MEMBER":
      const updatedMembers = state.members.filter(
        (member) => member.id !== action.payload
      );
      return { ...state, members: updatedMembers };

    default:
      return state;
  }
};
