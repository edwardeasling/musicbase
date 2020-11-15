import React from 'react';
import ArtistDetail from './artist_detail.jsx';
import { fetchUserInfo } from './../../actions/release_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ entities }) => ({
    releases: entities.releases,
    type: 'artist',
    artists: entities.artists
});

const mapDispatchToProps = (dispatch) => ({
    fetchReleases: (artistId) => dispatch(fetchUserInfo(artistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetail);
