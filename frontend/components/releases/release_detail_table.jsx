import React from "react";

const ReleaseDetailTable = ({ releaseInfo }) => {

    return (
        <div >
            <p>{releaseInfo.title}</p>
            <p>{releaseInfo.year}</p>
            <p>{releaseInfo.release_type}</p>
            <p>{releaseInfo.label}</p>
            <p>{releaseInfo.genre}</p>
            <p>{releaseInfo.price}</p>
            <img src={releaseInfo.photoUrl} />
        </div>
    )

}

export default ReleaseDetailTable;