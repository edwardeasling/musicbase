import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {

    const loggedInGreeting = () => (
        <div>
            <h3>Welcome user {currentUser.username}</h3>
            <button onClick={logout}>Logout</button>
        </div>
    )

    const notLoggedInGreeting = () => (
        <div>
            <Link to='/signup'>Signup</Link>
            <br />
            <Link to='/login'>Login</Link>
        </div>
    )

    return currentUser ? loggedInGreeting() : notLoggedInGreeting();

}

export default Greeting;