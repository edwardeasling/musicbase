import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {

    let userPagePath
    if (currentUser) {
        userPagePath = `/artist/${currentUser.id}`;
    }

    const loggedInGreeting = () => (
        <section className="header-right">
            <h3 className="header-right-greetingtext">Logged in as <Link to={userPagePath} className="header-button">{currentUser.username}</Link></h3>
            <Link to='/new_release' className="header-right-greetingtext">Create new release</Link>
            <p className="header-right-greetingtext header-button" onClick={logout}>Logout</p>
        </section>
    )

    const notLoggedInGreeting = () => (
        <section className="header-right">
            <Link to='/signup' className="header-right-greetingtext header-button">Signup</Link>
            <Link to='/login' className="header-right-greetingtext header-button">Login</Link>
        </section>
    )

    return currentUser ? loggedInGreeting() : notLoggedInGreeting();

}

export default Greeting;