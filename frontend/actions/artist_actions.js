import { getArtist } from '../util/artist_api_util';

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

const receiveArtist = artist => ({
    type: RECEIVE_ARTIST,
    artist
});

export const fetchArtist = artistId => dispatch => getArtist(artistId)
    .then(artist => dispatch(receiveArtist(artist)))
