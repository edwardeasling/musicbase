import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {

    const loggedInGreeting = () => (
        <section className="header-right">
            <h3 className="header-right-greetingtext">Logged in as {currentUser.username}</h3>
            <p className="header-right-greetingtext auth-button" onClick={logout}>Logout</p>
        </section>
    )

    const notLoggedInGreeting = () => (
        <section className="header-right">
            <Link to='/signup' className="header-right-greetingtext auth-button">Signup</Link>
            <Link to='/login' className="header-right-greetingtext auth-button">Login</Link>
        </section>
    )

    return currentUser ? loggedInGreeting() : notLoggedInGreeting();

}

export default Greeting;