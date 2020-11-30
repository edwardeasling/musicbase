import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const SessionForm = ({ errors, formType, processForm }) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [description, setDescription] = useState("");
    const [photoFile, setPhotoFile] = useState(null);

    const history = useHistory();

    let handleSubmit = e => {
        e.preventDefault();

        let user
        if (formType == 'login') {
            user = { user: { username: username, password: password, email: email, description: description }};
        } else {
            user = new FormData();
            // disabled these lines to temporarily break the signup form
            // user.append('user[username]', username)
            // user.append('user[password]', password)
            // user.append('user[email]', email)
            // user.append('user[description]', description)
            // user.append('user[photo]', photoFile)
        }
        processForm(user).then(() => history.push('/'));
    }

    const handleFile = (e) => {
        e.preventDefault();
        setPhotoFile(e.currentTarget.files[0]);
    }

    let errorText;
    if (formType == 'login') {
        errorText = errors ? "Login failed (form may be missing data)" : "";
    } else {
        errorText = errors ? "New user signup is currently disabled" : "";
    }

    const headerText = formType === 'login' ? 'Login to your account' : 'Create a new account';
    const submitText = formType === 'login' ? 'Login' : 'Create account';
    const emailInput = formType === 'login' ? "" : (
        <div className="form-inputcontainer">
            <label>Email</label>
            <input className="form-input" type="text" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
    )
    const descriptionInput = formType === 'login' ? "" : (
        <div className="form-inputcontainer">
            <label>Description</label>
            <input className="form-input" type="text" value={description} onChange={e => setDescription(e.target.value)} />
        </div>
    )
    const photoInput = formType === 'login' ? "" : (
        <div className="form-inputcontainer">
            <label>Artist photo</label>
            <input className="form-input" type="file" onChange={ handleFile } />
        </div>
    )

    return (
        <div className="form-container">
            <form onSubmit={ handleSubmit } className="form">
                <h2>{ headerText }</h2>
                <div className="form-inputcontainer">
                    <label>Username</label>
                    <input className="form-input" type="text" value={ username } onChange={ e => setUsername(e.target.value) } />
                </div>
                <div className="form-inputcontainer">
                    <label>Password</label>
                    <input className="form-input" type="password" value={ password } onChange={ e => setPassword(e.target.value) } />
                </div>
                { emailInput }
                { descriptionInput }
                { photoInput }
                <input type="submit" value={ submitText } className="form-submitbutton"/>
                <p className="form-errors"> {errorText} </p>
            </form>
        </div>
    )

}

export default SessionForm;