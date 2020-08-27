import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { mainPageReducer } from './reducers/MainPage-reducer'
import ReduxThunk from 'redux-thunk';


const middleware = [...getDefaultMiddleware(), ReduxThunk]

export const store = configureStore({
    reducer: {
        mainPageReducer
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
})

window.store = store