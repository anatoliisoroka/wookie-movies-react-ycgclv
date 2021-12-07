import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// srcS
import movieReducer from './movieSlice';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        movie: movieReducer
    },
    middleware: [
        sagaMiddleware,
    ],
})

export { store, sagaMiddleware }
