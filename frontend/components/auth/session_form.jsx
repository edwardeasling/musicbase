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
        <label>Email
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <br />
        </label>
    )
    const descriptionInput = formType === 'login' ? "" : (
        <label>Description
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
            <br />
        </label>
    )

    return (
        <form onSubmit={ handleSubmit }>
            <h2>{ headerText }</h2>
            <label>Username
                    <input type="text" value={ username } onChange={ e => setUsername(e.target.value) } />
                <br />
            </label>
            <label>Password
                <input type="password" value={ password } onChange={ e => setPassword(e.target.value) } />
                <br />
            </label>
            { emailInput }
            { descriptionInput }
            <input type="submit" value={ submitText } />
            <ul> {errorsList} </ul>
        </form>
    )

}

export default SessionForm;