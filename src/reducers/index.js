import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions';

const initialState = {
    error: '',
    message: '',
    isLoggedIn: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, error: '', message: '', isLoggedIn: true };
        case UNAUTH_USER:
            return { ...state, isLoggedIn: false };
        case AUTH_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }

}
