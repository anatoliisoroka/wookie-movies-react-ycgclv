import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
// src
import { store, sagaMiddleware } from '../../redux/store';
import rootSaga from '../../sagas';
import Header from './index';

sagaMiddleware.run(rootSaga);

test('renders wookie text', () => {
    render(
        <Provider store={store}>
            <Header />
        </Provider>
    );
    const textElement = screen.getByText(/Wookie/i);
    expect(textElement).toBeInTheDocument();
});
