import { getRandomReleases, getUserReleases, createRelease, getSingleRelease, searchReleases } from '../util/release_api_util';
import { fetchArtist} from './artist_actions';

export const RECEIVE_RELEASES = "RECEIVE_RELEASES";
export const RECEIVE_RELEASE = "RECEIVE_RELEASE";
export const RECEIVE_RELEASE_ERRORS = "RECEIVE_RELEASE_ERRORS";

const receiveReleases = releases => ({
    type: RECEIVE_RELEASES,
    releases
});

const receiveRelease = release => ({
    type: RECEIVE_RELEASE,
    release
})

const receiveReleaseErrors = errors => ({
    type: RECEIVE_RELEASE_ERRORS,
    errors
});

export const fetchRandomReleases = numberOfReleases => dispatch => getRandomReleases(numberOfReleases)
    .then(releases => dispatch(receiveReleases(releases)))

export const fetchSearch = searchText => dispatch => searchReleases(searchText)
    .then(releases => dispatch(receiveReleases(releases)))

export const fetchUserInfo = userId => dispatch => getUserReleases(userId)
    .then(releases => dispatch(receiveReleases(releases)))
    .then(dispatch(fetchArtist(userId)))

export const fetchSingleRelease = releaseId => dispatch => getSingleRelease(releaseId)
    .then(release => {
        dispatch(receiveRelease(release));
        dispatch(fetchArtist(release[releaseId].artist_id));
    });

export const createNewRelease = (release, artistId) => dispatch => createRelease(release, artistId)
    .then(
        release => dispatch(receiveRelease(release)),
        err => dispatch(receiveReleaseErrors([err.statusText]))
    );