import { getTracks, createTrack } from '../util/track_api_util';

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";

const receiveTracks = tracks => ({
    type: RECEIVE_TRACKS,
    tracks
});

const receiveTrack = track => ({
    type: RECEIVE_TRACK,
    track
});

const receiveTrackErrors = errors => ({
    type: RECEIVE_TRACK_ERRORS,
    errors
});

export const fetchTracks = (releaseId) => dispatch => getTracks(releaseId)
    .then(tracks => dispatch(receiveTracks(tracks)))

export const createNewTrack = (track) => dispatch => createTrack(track)
    .then(
        track => dispatch(receiveTrack(track)),
        err => dispatch(receiveTrackErrors(err))
    );
