import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const SessionForm = ({ errors, formType, processForm }) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [description, setDescription] = useState("");

    const history = useHistory();


    let handleSubmit = e => {
        e.preventDefault();
        const user = { user: { username: username, password: password, email: email, description: description }};
        processForm(user).then(() => history.push('/'));
    }

    const headerText = formType === 'login' ? 'Login to your account' : 'Create a new account';
    const submitText = formType === 'login' ? 'Login' : 'Create account';
    const errorsList = errors ? errors.map((error, idx) => <li key={idx}>{error}</li>) : "";
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
                <input type="submit" value={ submitText } className="form-submitbutton"/>
                <ul> {errorsList} </ul>
            </form>
        </div>
    )

}

export default SessionForm;