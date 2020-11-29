import React from "react";

const ReleaseDetailTableRight = ({ releaseInfo }) => {

    return (
        <div>
            <img src={releaseInfo.photoUrl} className="release-detail-right-image"/>
            <ul className="release-detail-right-text">
                <li className="release-detail-right-text-item">{releaseInfo.year}</li>
                <li>|</li>
                <li className="release-detail-right-text-item">{releaseInfo.release_type}</li>
                <li>|</li>
                <li className="release-detail-right-text-item">{releaseInfo.genre}</li>
                <li>|</li>
                <li className="release-detail-right-text-item">{releaseInfo.label}</li>
            </ul>
        </div>
    )

}

export default ReleaseDetailTableRight;