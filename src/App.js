import React from 'react';
import AccountInfo from './components/AccountInfo';
import PersonalDetails from './components/PersonalDetails';
import SuccessPage from './components/SuccessPage';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const detailSlice = createSlice({
	name: 'personal',
	initialState: {
		value: {},
	},
	reducers: {
		addPersonal: (state, action) => {
			return { ...state, ...{ personal: action.payload } };
		},
    addAccount: (state, action) => {
			return { ...state, ...{ account: action.payload } };
		},
	},
});

export const { addPersonal,addAccount } = detailSlice.actions;

export const store = configureStore({
	reducer: detailSlice.reducer,
});

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={PersonalDetails} />
					<Route exact path='/account' component={AccountInfo} />
					<Route exact path='/success' component={SuccessPage} />
				</Switch>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
