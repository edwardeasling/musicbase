import React from "react";

const ReleaseItem = ({ release }) => {

    return (
        <li>
            <img src="https://f4.bcbits.com/img/a0043393937_2.jpg"></img>
            <p>{release.username}</p>
            <p>{release.title}</p>
            <p>(genres)</p>
        </li>
    )

}

export default ReleaseItem;