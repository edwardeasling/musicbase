import React from "react";

const ReleaseItem = ({ release }) => {

    return (
        <li className="release-item">
            <img className="release-item-image" src="https://f4.bcbits.com/img/a0043393937_2.jpg"></img>
            <p className="release-artist">{release.username}</p>
            <p className="release-title">{release.title}</p>
            <p className="release-genre">(genre)</p>
        </li>
    )

}

export default ReleaseItem;