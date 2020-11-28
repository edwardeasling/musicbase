import React from "react";

const ReleaseDetailTableRight = ({ releaseInfo }) => {

    return (
        <div >
            <img src={releaseInfo.photoUrl} />
            <p>{releaseInfo.year}</p>
            <p>{releaseInfo.release_type}</p>
            <p>{releaseInfo.genre}</p>
            <p>{releaseInfo.label}</p>
        </div>
    )

}

export default ReleaseDetailTableRight;