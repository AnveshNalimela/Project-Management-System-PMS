import { Reducer } from "react";
import { CommentAction, CommentAvailableAction, CommentState } from "./types";

export const initialCommentState: CommentState = {
  comments: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const commentReducer: Reducer<CommentState, CommentAction> = (
  state = initialCommentState,
  action
): CommentState => {
  switch (action.type) {
    case CommentAvailableAction.FETCH_COMMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CommentAvailableAction.FETCH_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: action.payload,
      };
    case CommentAvailableAction.FETCH_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case CommentAvailableAction.ADD_COMMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CommentAvailableAction.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: [action.payload, ...state.comments],
      };
    case CommentAvailableAction.ADD_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
