import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const SessionForm = ({ errors, currentUserId, createNewRelease }) => {

    const [title, setTitle] = useState("");
    const [label, setLabel] = useState("");
    const [year, setYear] = useState("");
    const [releaseType, setReleaseType] = useState("album");
    const [price, setPrice] = useState("");

    const history = useHistory();

    let handleSubmit = e => {
        e.preventDefault();
        const release = { release: { title: title, label: label, year: year, release_type: releaseType, price: price, artist_id: currentUserId}};
        createNewRelease(release, currentUserId).then(() => history.push(`/artist/${currentUserId}`));
    }

    const errorsList = errors ? errors.map((error, idx) => <li key={idx}>{error}</li>) : "";

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
                    <label>Year</label>
                    <input className="form-input" type="text" value={ year } onChange={ e => setYear(e.target.value) } />
                </div>
                <div className="form-inputcontainer">
                    <label>Type</label>
                    <select value={releaseType} onChange={e => setReleaseType(e.target.value)} className="form-input">
                        <option value="album">Album</option>
                        <option value="anthology">Anthology</option>
                        <option value="compilation">Compilation</option>
                        <option value="ep">EP</option>
                        <option value="single">Single</option>
                    </select>
                </div>
                <div className="form-inputcontainer">
                    <label>Price</label>
                    <input className="form-input" type="text" value={ price } onChange={ e => setPrice(e.target.value) } />
                </div>
                <input type="submit" value="Add Release" className="form-submitbutton"/>
                <ul> {errorsList} </ul>
            </form>
        </div>
    )

}

export default SessionForm;