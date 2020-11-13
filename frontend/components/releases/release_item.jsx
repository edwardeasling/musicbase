import React from "react";
import { Link } from 'react-router-dom';

const ReleaseItem = ({ release, type }) => {

    const artistLine = type == "random" ? <Link to={`/artist/${release.artist_id}`}><p className="release-artist">{release.username}</p></Link> : "";
    const genreLine = type == "random" ? <p className="release-genre">(genre)</p> : "";

    return (
        <li className="release-item">
            <img className="release-item-image" src="https://f4.bcbits.com/img/a0043393937_2.jpg"></img>
            {artistLine}
            <p className="release-title">{release.title}</p>
            {genreLine}
        </li>
    )

}

export default ReleaseItem;