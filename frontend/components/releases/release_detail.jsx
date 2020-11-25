import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import ReleaseDetailTable from '../releases/release_detail_table';

const ReleaseDetail = ({ releases, fetchSingleRelease, fetchTracks }) => {

    const releaseId = parseInt(useParams().releaseId);
    const release = releases[releaseId];
    const releaseDetailTable = release ? <ReleaseDetailTable releaseInfo={release} /> : "";

    useEffect(() => {
        // fetches releases from database
        fetchSingleRelease(releaseId);
        fetchTracks(releaseId);
    }, []);

    return (
        <div >
            {releaseDetailTable}
        </div>
    )

}

export default ReleaseDetail;