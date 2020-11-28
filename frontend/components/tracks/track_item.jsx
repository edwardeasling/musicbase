import React, { useState } from "react";
import ReactAudioPlayer from 'react-audio-player';

const TrackItem = ({ track, setPlayer }) => {

    const addPlayer = () => setPlayer(
        <ReactAudioPlayer
            src={track.songUrl}
            controls
            className="audio-player"
        />
    )

    return (
        <li>
            #{track.track_no}: {track.title}
            <button onClick={addPlayer}>Play</button>
        </li>
    )

}

export default TrackItem;