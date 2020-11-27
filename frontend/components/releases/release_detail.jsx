import React, { useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import ReleaseDetailTable from './release_detail_table';
import TrackTable from '../tracks/track_table';

const ReleaseDetail = ({ releases, tracks, fetchSingleRelease, fetchTracks, currentUserId }) => {

    const releaseId = parseInt(useParams().releaseId);
    const release = releases[releaseId];

    const newTrackLink = (release && (currentUserId == release.artist_id)) ? <Link to={'/new_track/' + releaseId}>Add Track</Link> : "";
    const releaseDetailTable = release ? <ReleaseDetailTable releaseInfo={release} /> : "";
    const trackTable = Object.entries(tracks).length > 0 ? <TrackTable tracks={tracks} /> : "";
    

    useEffect(() => {
        fetchSingleRelease(releaseId);
        fetchTracks(releaseId);
    }, []);

    return (
        <div >
            {newTrackLink}
            {releaseDetailTable}
            {trackTable}
        </div>
    )
}

export default ReleaseDetail;