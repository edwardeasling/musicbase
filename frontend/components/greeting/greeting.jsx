import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

    const history = useHistory();
    
    const searchBar = 
    <input
    type="text"
    placeholder="Search..." 
    onKeyPress={event => {
        if (event.key === 'Enter') {
            history.push(`/search/${event.target.value}`)
        }
    }}
    className="search-bar"
    />

    let userPagePath
    if (currentUser) {
        userPagePath = `/artist/${currentUser.id}`;
    }

    const loggedInGreeting = () => (
        <section className="header-right">
            {searchBar}
            <div className="header-right-links">
                <h3 className="header-right-greetingtext">Logged in as <Link to={userPagePath} className="header-button">{currentUser.username}</Link></h3>
                <Link to='/new_release' className="header-right-greetingtext header-button">Create new release</Link>
                <p className="header-right-greetingtext header-button" onClick={logout}>Logout</p>
            </div>
        </section>
    )

    const notLoggedInGreeting = () => (
        <section className="header-right">
            {searchBar}
            <div className="header-right-links">
                <Link to='/signup' className="header-right-greetingtext header-button">Signup</Link>
                <Link to='/login' className="header-right-greetingtext header-button">Login</Link>
            </div>
        </section>
    )

    return currentUser ? loggedInGreeting() : notLoggedInGreeting();

}

export default Greeting;