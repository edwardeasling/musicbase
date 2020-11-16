import { RECEIVE_RELEASE, RECEIVE_ERRORS } from '../actions/release_actions'

export default (state = [], action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_RELEASE:
            return [];
        case RECEIVE_ERRORS:
            return Object.assign([], { errors: action.errors })
        default:
            return state;
    }
}