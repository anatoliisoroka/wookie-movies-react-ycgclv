import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        searchValue: '',
        searching: false,
        items: []
    },
    reducers: {
        searchMoviesRequested: (state, action) => {
            state.searchValue = action.payload.searchValue;
            state.searching = true;
        },
        fetchMoviesSucceeded: (state, action) => {
            state.items = action.payload.items;
            state.searching = false;
        },
        setSearching: (state) => {
            state.searching = true;
        }
    }
})

export const { searchMoviesRequested, fetchMoviesSucceeded, setSearching } = movieSlice.actions;

export default movieSlice.reducer;