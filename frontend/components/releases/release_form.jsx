import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const ReleaseForm = ({ errors, currentUserId, createNewRelease }) => {

    const [title, setTitle] = useState("");
    const [label, setLabel] = useState("");
    const [genre, setGenre] = useState("");
    const [year, setYear] = useState("");
    const [releaseType, setReleaseType] = useState("Album");
    const [price, setPrice] = useState("");
    const [photoFile, setPhotoFile] = useState(null);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRelease = new FormData();
        newRelease.append('release[title]', title)
        newRelease.append('release[label]', label)
        newRelease.append('release[genre]', genre)
        newRelease.append('release[year]', year)
        newRelease.append('release[release_type]', releaseType)
        newRelease.append('release[price]', price)
        newRelease.append('release[artist_id]', currentUserId)
        newRelease.append('release[photo]', photoFile)

        createNewRelease(newRelease, currentUserId).then(() => history.push(`/artist/${currentUserId}`));
    }

    const handleFile = (e) => {
        e.preventDefault();
        setPhotoFile(e.currentTarget.files[0]);
    }

    const errorsList = errors ? "Upload failed (form may be missing data)" : "";

    return (
        <div className="form-container">
            <form onSubmit={ handleSubmit } className="form">
                <h2>Add a new release</h2>
                <div className="form-inputcontainer">
                    <label>Title</label>
                    <input className="form-input" type="text" value={ title } onChange={ e => setTitle(e.target.value) } />
                </div>
                <div className="form-inputcontainer">
                    <label>Label</label>
                    <input className="form-input" type="text" value={ label } onChange={ e => setLabel(e.target.value) } />
                </div>
                <div className="form-inputcontainer">
                    <label>Genre</label>
                    <input className="form-input" type="text" value={ genre } onChange={ e => setGenre(e.target.value) } />
                </div>
                <div className="form-inputcontainer">
                    <label>Year</label>
                    <input className="form-input" type="text" value={ year } onChange={ e => setYear(e.target.value) } />
                </div>
                <div className="form-inputcontainer">
                    <label>Type</label>
                    <select value={releaseType} onChange={e => setReleaseType(e.target.value)} className="form-input">
                        <option value="Album">Album</option>
                        <option value="Anthology">Anthology</option>
                        <option value="Compilation">Compilation</option>
                        <option value="EP">EP</option>
                        <option value="Single">Single</option>
                    </select>
                </div>
                <div className="form-inputcontainer">
                    <label>Price</label>
                    <input className="form-input" type="text" value={ price } onChange={ e => setPrice(e.target.value) } />
                </div>
                <div className="form-inputcontainer">
                    <label>Release Art</label>
                    <input className="form-input" type="file" onChange={ handleFile } />
                </div>
                <input type="submit" value="Add Release" className="form-submitbutton"/>
                <p className="form-errors"> {errorsList} </p>
            </form>
        </div>
    )

}

export default ReleaseForm;