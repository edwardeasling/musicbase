import React, { useEffect } from "react";
import ReleaseItem from './release_item.jsx';

const ReleasesIndex = ({ releases, type, fetchReleases, artistId }) => {

    useEffect(() => {
        // fetches releases from database
        if (type=="random") { 
            fetchReleases(8)
        } else {
            fetchReleases(artistId);
        }
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

    let releaseIds;
    if (type=="random") {
        releaseIds = shuffle(Object.keys(releases)); // shuffles releases randomly
    } else {
        const releaseObjectValues = Object.values(releases);
        releaseObjectValues.sort((a, b) => (a.year < b.year) ? 1 : -1); // sorts releases in descending year order
        releaseIds = releaseObjectValues.map(release => release.id);
        console.log()
    }

    const releaseItems = releaseIds.map((id, idx) => <ReleaseItem key={idx} release={releases[id]} type={type}/>)

    return (
        <ul className="releases-index">
            {releaseItems}
        </ul>
    )

}

export default ReleasesIndex;