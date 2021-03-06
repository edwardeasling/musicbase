import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'

const _nullState = {
    id: null
}

export default (state = _nullState, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: Object.keys(action.currentUser)[0] };
        case LOGOUT_CURRENT_USER:
            return Object.assign({}, _nullState);
        default:
            return state;
    }
}