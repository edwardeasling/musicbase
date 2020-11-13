import React from 'react';
import ArtistDetail from './artist_detail.jsx';
import { fetchUserReleases } from './../../actions/release_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ entities }) => ({
    releases: entities.releases,
    type: 'artist'
});

const mapDispatchToProps = (dispatch) => ({
    fetchReleases: (artistId) => dispatch(fetchUserReleases(artistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetail);
