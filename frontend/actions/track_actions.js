import { getTracks } from '../util/track_api_util';

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";

const receiveTracks = tracks => ({
    type: RECEIVE_TRACKS,
    tracks
});

export const fetchTracks = (releaseId) => dispatch => getTracks(releaseId)
    .then(tracks => dispatch(receiveTracks(tracks)))