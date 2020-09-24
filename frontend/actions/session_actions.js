import { createUser, createSession, destroySession } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const login = user => dispatch => createSession(user)
    .then(
        loggedInUser => (dispatch(receiveCurrentUser(loggedInUser))),
        err => (dispatch(receiveErrors(err.responseJSON)))
    );

export const logout = () => dispatch => destroySession()
    .then(() => dispatch(logoutCurrentUser()));

export const signup = user => dispatch => createUser(user)
    .then(
        newUser => (dispatch(receiveCurrentUser(newUser))),
        err => (dispatch(receiveErrors(err.responseJSON)))
    );

