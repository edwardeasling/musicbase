import React from "react";
import { useParams } from 'react-router-dom';
import ReleasesIndex from '../releases/releases_index';

const Search = ({ releases, type, fetchReleases }) => {

    const searchText = useParams().searchText;

    return (
        <div className="search">
            <h2 className="search-header">Search results for "{searchText}"</h2>
            <ReleasesIndex releases={releases} type={type} fetchReleases={fetchReleases} filter={searchText} />
        </div>
    )

}

export default Search;