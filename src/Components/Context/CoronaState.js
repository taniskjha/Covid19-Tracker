import React, { useReducer } from 'react';
import axios from 'axios';
import coronaContext from './CoronaContext';
import corornaReducer from './CoronaReducer';
import { GET_DATA, SET_LOADING } from './types';

const CoronaState = (props) => {
	const initialState = {
		coronas: [],
		loading: false
	};
	const [ state, dispatch ] = useReducer(corornaReducer, initialState);
	//GetData
	const getData = async () => {
		setLoading();
		const res = await axios.get('https://api.covid19api.com/summary');
		dispatch({
			type: GET_DATA,
			payload: res.data.Countries
		});
	};
	//setLoading
	const setLoading = () => {
		dispatch({
			type: SET_LOADING
		});
	};

	return (
		<coronaContext.Provider
			value={{
				coronas: state.coronas,
				loading: state.loading,
				getData
			}}
		>
			{props.children}
		</coronaContext.Provider>
	);
};

export default CoronaState;
