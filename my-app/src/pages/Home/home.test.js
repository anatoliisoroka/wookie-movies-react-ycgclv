import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
// src
import Home from './index';
import { store, sagaMiddleware } from '../../redux/store';
import rootSaga from '../../sagas';

sagaMiddleware.run(rootSaga);

test('renders getting movies text', () => {
    render(
        <Provider store={store}>
            <Home />
        </Provider>
    );
    const gettingMoviesElement = screen.getByText(/Getting movies../i);
    expect(gettingMoviesElement).toBeInTheDocument();
});
