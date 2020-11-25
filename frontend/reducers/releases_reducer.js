import { RECEIVE_RELEASES, RECEIVE_RELEASE } from '../actions/release_actions'

export default (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_RELEASES:
            return Object.assign({}, action.releases);
        case RECEIVE_RELEASE:
            return Object.assign({}, action.release);
        default:
            return state;
    }
}