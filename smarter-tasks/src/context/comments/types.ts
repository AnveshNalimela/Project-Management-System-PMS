export enum CommentListAvailableAction {
  FETCH_COMMENT_REQUEST = "FETCH_COMMENT_REQUEST",
  FETCH_COMMENT_SUCCESS = "FETCH_COMMENT_SUCCESS",
  FETCH_COMMENT_FAILURE = "FETCH_COMMENT_FAILURE",

  CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST",
  CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS",
  CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE",

  // Add action types
  REORDER_COMMENT = "REORDER_COMMENT",
}

export type TaskActions =
  | { type: TaskListAvailableAction.REORDER_TASKS; payload: ProjectData }
  | { type: TaskListAvailableAction.FETCH_TASKS_REQUEST }
  | { type: TaskListAvailableAction.FETCH_TASKS_SUCCESS; payload: ProjectData }
  | { type: TaskListAvailableAction.FETCH_TASKS_FAILURE; payload: string }
  | { type: TaskListAvailableAction.CREATE_TASK_REQUEST }
  | { type: TaskListAvailableAction.CREATE_TASK_SUCCESS }
  | { type: TaskListAvailableAction.CREATE_TASK_FAILURE; payload: string };

// A type to hold dispatch actions in a context.
export type TasksDispatch = React.Dispatch<TaskActions>;

export type AvailableColumns = "pending" | "in_progress" | "done";

export type ColumnData = {
  id: string;
  title: string;
  taskIDs: string[];
};

export type Columns = {
  [k in AvailableColumns]: ColumnData;
};

export type CommentDetails = {
  id: number;
  comment: string;
  date: string;
  name: string;
};

// export type TaskDetailsPayload = Omit<TaskDetails, "id" | "assignee" | "state">;

export type Comments = {
  [k: string]: CommentDetails;
};

export type ProjectData = {
  tasks: Tasks;
  columns: Columns;
  columnOrder: AvailableColumns[];
};

export interface TaskListState {
  projectData: ProjectData;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}
