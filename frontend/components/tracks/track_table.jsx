import React from "react";
import TrackItem from './track_item';

const TrackTable = ({ tracks, setPlayer }) => {

    const sortedTracks = Object.values(tracks).sort((a,b) => a.track_no - b.track_no);
    const trackItems = sortedTracks.map((track, idx) => <TrackItem track={track} setPlayer={setPlayer} key={idx} />);

    return (
        <ul>
            {trackItems}
        </ul>
    )

}

export default TrackTable;