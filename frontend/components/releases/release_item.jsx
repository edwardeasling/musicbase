import React from "react";
import { Link } from 'react-router-dom';

const ReleaseItem = ({ release, type }) => {

    const artistLine = type == "random" ? <Link to={`/artist/${release.artist_id}`}><p className="release-artist">{release.username}</p></Link> : "";
    const genreLine = type == "random" ? <p className="release-genre">{release.genre}</p> : "";
    const releaseLink = `/releases/${release.id}`

    return (
        <li className="release-item">
            <Link to={releaseLink}><img className="release-item-image" src={release.photoUrl}></img></Link>
            {artistLine}
            <Link to={releaseLink}><p className="release-title">{release.title}</p></Link >
            {genreLine}
        </li>
    )

}

export default ReleaseItem;