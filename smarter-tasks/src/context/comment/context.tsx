import React, { createContext, useContext, useReducer, PropsWithChildren } from 'react';
import { CommentState, CommentDispatch } from './types';
import { commentReducer, initialCommentState } from './reducer';




const CommentStateContext = createContext<CommentState>(initialCommentState);
const CommentDispatchContext = createContext<CommentDispatch>(() => { });

export const CommentProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(commentReducer, initialCommentState);
    return (
        <CommentStateContext.Provider value={state}>
            <CommentDispatchContext.Provider value={dispatch}>
                {children}
            </CommentDispatchContext.Provider>
        </CommentStateContext.Provider>
    )
}

export const useCommentState = () => useContext(CommentStateContext);
export const useCommentDispatch = () => useContext(CommentDispatchContext);