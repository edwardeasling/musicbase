import React, { useState } from "react";
import ReactAudioPlayer from 'react-audio-player';

const TrackItem = ({ track, setPlayer }) => {

    const addPlayer = () => setPlayer(
        <ReactAudioPlayer
            src={track.songUrl}
            controls
            className="audio-player"
            autoPlay
        />
    )

    return (
        <li className="track-table-item">
            <strong className="play-button" onClick={addPlayer}>{String.fromCharCode(9654)}</strong>   {track.track_no}.   {track.title}
        </li>
    )

}

export default TrackItem;