import React from 'react';
import ReleasesIndex from './releases_index.jsx';
import { fetchRandomReleases } from './../../actions/release_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({entities}) => ({
    releases: entities.releases
});

const mapDispatchToProps = (dispatch) => ({
    fetchRandomReleases : numberOfReleases => dispatch(fetchRandomReleases(numberOfReleases))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReleasesIndex);
