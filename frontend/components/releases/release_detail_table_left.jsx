import React from "react";
import { Link } from 'react-router-dom';

const ReleaseDetailTableLeft = ({ releaseInfo, artistName, player }) => {

    const artistUrl = `/artist/${releaseInfo.artist_id}`;
    const artistLink = <Link to={artistUrl} className="release-detail-artistlink">{artistName}</Link>
    const purchaseLink = <a href="" className="release-detail-purchaseLink">Purchase for ${releaseInfo.price} USD</a>

    return (
        <div className="release-detail-left-info">
            <p className="release-detail-title">{releaseInfo.title}</p>
            <p className="release-detail-artistname">By {artistLink}</p>
            <div className="player-container">
                {player}
            </div>
            <p className="release-detail-price">{purchaseLink}</p>
        </div>
    )

}

export default ReleaseDetailTableLeft;