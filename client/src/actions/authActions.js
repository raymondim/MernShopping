import axios from 'axios';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "./types";

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
    // User loading
    dispatch({
        type: USER_LOADING
    });

    // Get token from localstorage
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            "Content-type": "application", 
        }
    }

    // If token, add to headers
    if(token) {
        config.headers['x-auth-token'] = token;
    }

    axios.get('/api/auth/user', config)
}