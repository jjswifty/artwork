import { createAction, createReducer } from "@reduxjs/toolkit"

export const toggleFetching = createAction('TOGGLE_FETCHING')

let initialState = {
    isFetching: false,
};

export const mainPageReducer = createReducer(initialState, {

    [toggleFetching]: (state) => {
        state.isFetching = !state.isFetching
    },
    
});

/* thunks */

