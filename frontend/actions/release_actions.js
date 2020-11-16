import { getRandomReleases, getUserReleases, createRelease } from '../util/release_api_util';
import { fetchArtist} from './artist_actions';

export const RECEIVE_RELEASES = "RECEIVE_RELEASES";
export const RECEIVE_RELEASE = "RECEIVE_RELEASE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveReleases = releases => ({
    type: RECEIVE_RELEASES,
    releases
});

const receiveRelease = release => ({
    type: RECEIVE_RELEASE,
    release
})

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const fetchRandomReleases = numberOfReleases => dispatch => getRandomReleases(numberOfReleases)
    .then(releases => dispatch(receiveReleases(releases)))

export const fetchUserInfo = userId => dispatch => getUserReleases(userId)
    .then(releases => dispatch(receiveReleases(releases)))
    .then(dispatch(fetchArtist(userId)))

export const createNewRelease = (release, artistId) => dispatch => createRelease(release, artistId)
    .then(
        release => dispatch(receiveRelease(release)),
        err => (dispatch(receiveErrors(err.responseJSON))) 
    );