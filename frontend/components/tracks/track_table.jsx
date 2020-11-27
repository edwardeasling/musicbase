import React from "react";
import { Link } from 'react-router-dom';

const TrackTable = ({ tracks }) => {

    const sortedTracks = Object.values(tracks).sort((a,b) => a.track_no - b.track_no);
    const trackItems = sortedTracks.map((track, idx)=> <li key={idx}>#{track.track_no}: {track.title}</li>);

    return (
        <ul>
            {trackItems}
        </ul>
    )

}

export default TrackTable;