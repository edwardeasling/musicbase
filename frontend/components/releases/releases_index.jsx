import React, { useEffect } from "react";
import ReleaseItem from './release_item.jsx';

const ReleasesIndex = ({ releases, fetchRandomReleases }) => {

    useEffect(() => {
        // Update the document title using the browser API
        fetchRandomReleases(8);
    }, []);

    const shuffle = function(array) {
        // shuffles an array
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    const releaseIds = shuffle(Object.keys(releases));
    const releaseItems = releaseIds.map((id, idx) => <ReleaseItem key={idx} release={releases[id]} />)

    return (
        <ul className="releases-index">
            {releaseItems}
        </ul>
    )

}

export default ReleasesIndex;