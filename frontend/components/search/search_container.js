import React from 'react';
import Search from './search.jsx';
import { fetchSearch } from './../../actions/release_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ entities }) => ({
    releases: entities.releases,
    type: 'search'
});

const mapDispatchToProps = (dispatch) => ({
    fetchReleases: (searchText) => dispatch(fetchSearch(searchText))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
