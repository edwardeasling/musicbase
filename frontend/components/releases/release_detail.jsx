import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import ReleaseDetailTableLeft from './release_detail_table_left';
import ReleaseDetailTableRight from './release_detail_table_right';
import TrackTable from '../tracks/track_table';
import ReactAudioPlayer from 'react-audio-player';

const ReleaseDetail = ({ releases, tracks, artists, fetchSingleRelease, fetchTracks, currentUserId }) => {

    const releaseId = parseInt(useParams().releaseId);
    const release = releases[releaseId];
    const [player, setPlayer] = useState(<div className="audio-player">
        <ReactAudioPlayer
            src=""
            controls
            className="audio-player"
        />
    </div>);
    
    const newTrackLink = (release && (currentUserId == release.artist_id)) ? <Link to={'/new_track/' + releaseId}>Add Track</Link> : "";
    const artistName = (Object.entries(artists).length > 0 && Object.entries(releases).length > 0) ? artists[release.artist_id].username : "";

    const releaseDetailTableLeft = release ? <ReleaseDetailTableLeft releaseInfo={release} artistName={artistName} player={player}/> : "";
    const releaseDetailTableRight = release ? <ReleaseDetailTableRight releaseInfo={release} /> : "";
    const trackTable = Object.entries(tracks).length > 0 ? <TrackTable tracks={tracks} setPlayer={setPlayer}  /> : "";

    useEffect(() => {
        fetchSingleRelease(releaseId);
        fetchTracks(releaseId);
    }, []);

    return (
        <div className="release-detail-container">
            <div className="release-detail-left">
                {releaseDetailTableLeft}
                {trackTable}
                {newTrackLink}
            </div>
            <div className="release-detail-left">
                {releaseDetailTableRight}
            </div>
        </div>
    )
}

export default ReleaseDetail;