import { getRandomReleases } from '../util/release_api_util';

export const RECEIVE_RELEASES = "RECEIVE_RELEASES";

const receiveReleases = releases => ({
    type: RECEIVE_RELEASES,
    releases
});

export const fetchRandomReleases = numberOfReleases => dispatch => getRandomReleases(numberOfReleases)
    .then(releases => dispatch(receiveReleases(releases)))
