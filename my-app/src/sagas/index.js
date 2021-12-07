import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
// src
import { searchMoviesRequested, fetchMoviesSucceeded } from '../redux/movieSlice';

function axiosCall(url) {
    return axios.get(url, {
        headers: {
          Authorization: 'Bearer Wookie2021'
        }
    })
}

function* searchMovies(action) {
    const { searchValue } = { ...action.payload };
  
    try {
        const { data } = yield call(axiosCall, `https://wookie.codesubmit.io/movies?q=${searchValue}`);
        yield put(fetchMoviesSucceeded({ items: data.movies }));
    } catch (error) {
        yield put(fetchMoviesSucceeded({ items: [] }));
    }
}

function* fetchMovies() {
    const { data } = yield call(axiosCall, 'https://wookie.codesubmit.io/movies');
    yield put(fetchMoviesSucceeded({ items: data.movies }));
}

function* rootSaga() {
    yield all([
        fetchMovies(),
        yield takeLatest(searchMoviesRequested, searchMovies)
    ])
}
  
export default rootSaga
