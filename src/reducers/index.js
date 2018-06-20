// import { combineReducers } from 'redux';
// import { loginUserReducer } from './reducers';

import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions';

// export default rootReducer = combineReducers({
//     loginUserReducer
//  });

const initialState = {
    username: '',
    token: '',
    error: '',
    message: '',
    isLoggedIn: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, error: '', message: '', username: action.username, token: action.token, isLoggedIn: true };
        case UNAUTH_USER:
            return { ...state, isLoggedIn: false };
        case AUTH_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }

}