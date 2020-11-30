import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import ReleaseDetailTableLeft from './release_detail_table_left';
import ReleaseDetailTableRight from './release_detail_table_right';
import TrackTable from '../tracks/track_table';
import ReactAudioPlayer from 'react-audio-player';

const ReleaseDetail = ({ releases, tracks, artists, fetchSingleRelease, fetchTracks, currentUserId }) => {

    const releaseId = parseInt(useParams().releaseId);
    const release = releases[releaseId];

    const releaseLoaded = release;
    const artistLoaded = release && (Object.entries(artists).length > 0) && (Object.keys(artists)[0] == release.artist_id);
    const tracksLoaded = Object.entries(tracks).length > 0 && Object.entries(tracks)[0][1].release_id == releaseId;
    const currentUserRelease = releaseLoaded && (currentUserId == release.artist_id);

    console.log(releaseLoaded + ' ' + artistLoaded + ' ' + tracksLoaded + ' ' + currentUserRelease);
    console.log(Object.entries(artists))


    const [player, setPlayer] = useState(<div className="audio-player">
        <ReactAudioPlayer
            src=""
            controls
            className="audio-player"
        />
    </div>);
    
    const newTrackLink = currentUserRelease ? <div className="new-track-link"><Link to={'/new_track/' + releaseId}>Add Track</Link></div> : "";
    const artistName = artistLoaded ? Object.entries(artists)[0][1].username : "";

    const releaseDetailTableLeft = artistLoaded ? <ReleaseDetailTableLeft releaseInfo={release} artistName={artistName} player={player}/> : "";
    const releaseDetailTableRight = artistLoaded ? <ReleaseDetailTableRight releaseInfo={release} /> : "";
    const trackTable = tracksLoaded ?  <TrackTable tracks={tracks} setPlayer={setPlayer}  /> : "";

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
            <div className="release-detail-right">
                {releaseDetailTableRight}
            </div>
        </div>
    )
}

export default ReleaseDetail;