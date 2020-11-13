import React from 'react';
import ReleasesIndex from './releases_index.jsx';
import { fetchRandomReleases } from './../../actions/release_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({entities}) => ({
    releases: entities.releases,
    type: 'random'
});

const mapDispatchToProps = (dispatch) => ({
    fetchReleases: (numberReleases) => dispatch(fetchRandomReleases(numberReleases))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReleasesIndex);
