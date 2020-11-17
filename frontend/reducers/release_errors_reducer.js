import { RECEIVE_RELEASE, RECEIVE_RELEASE_ERRORS } from '../actions/release_actions'

export default (state = [], action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_RELEASE:
            return [];
        case RECEIVE_RELEASE_ERRORS:
            return Object.assign([], { errors: action.errors })
        default:
            return state;
    }
}