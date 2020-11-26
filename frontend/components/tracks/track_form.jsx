import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Select from 'react-select'
// import { useHistory } from 'react-router-dom';

const TrackForm = ({ errors, createTrack, currentUserId, fetchReleases, releases }) => {

    const paramsReleaseId = parseInt(useParams().releaseId);

    const [title, setTitle] = useState("");
    const [track_no, setTrackNo] = useState("");
    const [release_id, setReleaseId] = useState(paramsReleaseId);

    // const history = useHistory();

    useEffect(() => {
        // fetches releases from database
        fetchReleases(currentUserId);
    }, []);

    // creates options for form
    let releaseOptions = [];
    let defaultValue;
    if (Object.keys(releases).length > 0) {
        (Object.values(releases)).sort().forEach(release => releaseOptions.push({ value: release.id, label: release.title}));
        defaultValue = { value: paramsReleaseId, label: releases[paramsReleaseId].title}
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTrack = new FormData();
        newTrack.append('release[title]', title)
        newTrack.append('release[track_no]', track_no)
        newTrack.append('release[release_id]', release_id)

        // createNewRelease(newRelease, currentUserId).then(() => history.push(`/artist/${currentUserId}`));
    }

    // const handleFile = (e) => {
    //     e.preventDefault();
    //     setPhotoFile(e.currentTarget.files[0]);
    // }

    // const errorsList = errors ? "Upload failed (form may be missing data)" : "";

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <h2>Add a new track</h2>
                <div className="form-inputcontainer">
                    <label>Release Name</label>
                    <Select value={defaultValue} options={releaseOptions} onChange={val => setReleaseId(val)} className="form-input" />
                </div>
                <div className="form-inputcontainer">
                    <label>Title</label>
                    <input className="form-input" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="form-inputcontainer">
                    <label>Track No</label>
                    <input className="form-input" type="text" value={track_no} onChange={e => setTrackNo(e.target.value)} />
                </div>
                <input type="submit" value="Add Track" className="form-submitbutton" />
                {/* <p className="form-errors"> {errorsList} </p> */}
            </form>
        </div>
    )

}

export default TrackForm;