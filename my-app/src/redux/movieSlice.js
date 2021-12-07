import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        searchValue: '',
        items: []
    },
    reducers: {
        searchMoviesRequested: (state, action) => {
            state.searchValue = action.payload.searchValue;
        },
        fetchMoviesSucceeded: (state, action) => {
            state.items = action.payload.items;
        }
    }
})

export const { searchMoviesRequested, fetchMoviesSucceeded } = movieSlice.actions;

export default movieSlice.reducer;