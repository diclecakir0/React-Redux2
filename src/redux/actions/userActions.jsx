import actionTypes from "../constants/actionTypes"
import axios from 'axios';
// !The file where actions are defined
// By keeping actions in a separate file, we avoid code duplication

export const setLoading = (param) => ({
	type: actionTypes.SET_LOADING,
	payload: param,
});

export const setUsers = (payload) => ({
	type: actionTypes.SET_USERS,
	payload,
});

// ! Asynchronous action

export const getUsers2 = () => {
	return async function(dispatch){
		const res = await axios.get('https://jsonplaceholder.typicode.com/users');
			dispatch({
				type: actionTypes.SET_USERS,
				payload: res.data,
			});
		};
		
	};

