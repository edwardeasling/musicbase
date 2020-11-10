import React, { useEffect } from "react";
import ReleaseItem from './release_item.jsx';

const ReleasesIndex = ({ releases, fetchRandomReleases }) => {

    useEffect(() => {
        // Update the document title using the browser API
        fetchRandomReleases(4);
    }, []);

    const shuffle = function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Create a random index to pick from the original array
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // Cache the value, and swap it with the current element
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    const releaseIds = shuffle(Object.keys(releases));
    
    const releaseItems = releaseIds.map((id, idx) => <ReleaseItem key={idx} release={releases[id]} />)

    return (
        <ul>
            {releaseItems}
        </ul>
    )

}

export default ReleasesIndex;