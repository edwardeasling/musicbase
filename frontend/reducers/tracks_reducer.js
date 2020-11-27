import { RECEIVE_TRACKS, RECEIVE_TRACK } from '../actions/track_actions'

export default (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_TRACKS:
            return Object.assign({}, action.tracks);
        case RECEIVE_TRACK:
            return Object.assign({}, action.track);
        default:
            return state;
    }
}