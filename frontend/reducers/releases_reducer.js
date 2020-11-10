import { RECEIVE_RELEASES } from '../actions/release_actions'

export default (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_RELEASES:
            return Object.assign({}, action.releases);
        default:
            return state;
    }
}