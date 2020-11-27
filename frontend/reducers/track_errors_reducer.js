import { RECEIVE_TRACK, RECEIVE_TRACK_ERRORS } from '../actions/track_actions'

export default (state = [], action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_TRACK:
            return [];
        case RECEIVE_TRACK_ERRORS:
            return Object.assign([], { errors: action.errors })
        default:
            return state;
    }
}