import { getRandomReleases, getUserReleases } from '../util/release_api_util';
import { fetchArtist} from './artist_actions';

export const RECEIVE_RELEASES = "RECEIVE_RELEASES";

const receiveReleases = releases => ({
    type: RECEIVE_RELEASES,
    releases
});

export const fetchRandomReleases = numberOfReleases => dispatch => getRandomReleases(numberOfReleases)
    .then(releases => dispatch(receiveReleases(releases)))

export const fetchUserInfo = userId => dispatch => getUserReleases(userId)
    .then(releases => dispatch(receiveReleases(releases)))
    .then(dispatch(fetchArtist(userId)))
