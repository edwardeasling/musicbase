import { createUser, createSession, destroySession } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";
export const RECEIVE_LOGIN_ERRORS = "RECEIVE_LOGIN_ERRORS";

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveSignupErrors = errors => ({
    type: RECEIVE_SIGNUP_ERRORS,
    errors
});

const receiveLoginErrors = errors => ({
    type: RECEIVE_LOGIN_ERRORS,
    errors
});

export const login = user => dispatch => createSession(user)
    .then(
        loggedInUser => (dispatch(receiveCurrentUser(loggedInUser))),
        err => (dispatch(receiveLoginErrors(err.responseJSON)))
    );

export const logout = () => dispatch => destroySession()
    .then(() => dispatch(logoutCurrentUser()));

export const signup = user => dispatch => createUser(user)
    .then(
        newUser => (dispatch(receiveCurrentUser(newUser))),
        err => (dispatch(receiveSignupErrors([err.responseText])))
    );

