import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import {createStore} from 'redux';
import contactReducer from './redux/reducers/contactReducer';
import { composeWithDevTools} from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const store = createStore(contactReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);