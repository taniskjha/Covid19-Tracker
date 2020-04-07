import { GET_DATA, SET_LOADING } from './types';

export default (state, action) => {
	switch (action.type) {
		case GET_DATA:
			return {
				...state,
				coronas: action.payload,
				loading: false
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};

		default:
			return state;
	}
};
