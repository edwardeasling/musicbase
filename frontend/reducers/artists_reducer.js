import { RECEIVE_ARTIST } from '../actions/artist_actions'

export default (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_ARTIST:
            return Object.assign({}, action.artist);
        default:
            return state;
    }
}