import * as SessionApiUtil from './../util/session_api_util';


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
});

// export const login = (user) => dispatch => (
//     SessionApiUtil.login(user).then(user => (dispatch(receiveCurrentUser(user))))
//     .fail(error => (dispatch(receiveErrors(error.responseJSON))))
// );

export const login = (user) => dispatch => (
    SessionApiUtil.login(user).then(user => { (dispatch(receiveCurrentUser(user))); dispatch(clearErrors())},
    error => (dispatch(receiveErrors(error.responseJSON))))
);

export const logout = () => dispatch => (
    SessionApiUtil.logout().then(() => (dispatch(logoutCurrentUser()))
));

export const signup = (user) => dispatch => (
    SessionApiUtil.signup(user).then(user => (dispatch(receiveCurrentUser(user))),
    error => (dispatch(receiveErrors(error.responseJSON))))
);