import React from "react";
import ReactAudioPlayer from 'react-audio-player';

const TrackTable = ({ track }) => {
    
    return (
        <li>#{track.track_no}: {track.title}
            <ReactAudioPlayer
                src={track.songUrl}
                controls
            />
        </li>
    )

}

export default TrackTable;