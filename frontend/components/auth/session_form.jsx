import React, { useState } from "react";

const SessionForm = ({ errors, formType, processForm }) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [description, setDescription] = useState("");

    let handleSubmit = e => {
        e.preventDefault();
        const user = { user: { username: username, password: password, email: email, description: description }};
        processForm(user);
    }

    const headerText = formType === 'login' ? 'Login to your account' : 'Create a new account';
    const submitText = formType === 'login' ? 'Login' : 'Create account';
    const errorsList = errors ? errors.map((error, idx) => <li key={idx}>{error}</li>) : "";
    const emailInput = formType === 'login' ? "" : (
        <div className="session-form-inputcontainer">
            <label>Email</label>
            <input className="session-form-input" type="text" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
    )
    const descriptionInput = formType === 'login' ? "" : (
        <div className="session-form-inputcontainer">
            <label>Description</label>
            <input className="session-form-input" type="text" value={description} onChange={e => setDescription(e.target.value)} />
        </div>
    )

    return (
        <div className="session-form-container">
            <form onSubmit={ handleSubmit } className="session-form">
                <h2>{ headerText }</h2>
                <div className="session-form-inputcontainer">
                    <label>Username</label>
                    <input className="session-form-input" type="text" value={ username } onChange={ e => setUsername(e.target.value) } />
                </div>
                <div className="session-form-inputcontainer">
                    <label>Password</label>
                    <input className="session-form-input" type="password" value={ password } onChange={ e => setPassword(e.target.value) } />
                </div>
                { emailInput }
                { descriptionInput }
                <input type="submit" value={ submitText } className="session-form-submitbutton"/>
                <ul> {errorsList} </ul>
            </form>
        </div>
    )

}

export default SessionForm;