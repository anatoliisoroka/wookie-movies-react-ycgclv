import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
// src
import { store, sagaMiddleware } from './redux/store';
import Router from './Router';
import rootSaga from './sagas';

sagaMiddleware.run(rootSaga);

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Suspense fallback={<div>Loading...</div>}>
					<Router />
				</Suspense>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
