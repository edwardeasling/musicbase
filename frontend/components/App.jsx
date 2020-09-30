import React from "react";
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
    
    return( 
        <div className="page-container">
            <header className="header">
                <section className="header-left">
                    <img src={ window.logo } className="header-left-logo" />
                    <h4 className="header-left-text">Get new music directly from artists and labels</h4>
                </section>
                <div className="header-middle"/>
                <GreetingContainer />
            </header>

            <main className="main">
                <Switch>
                    <AuthRoute exact path="/login" component={ LoginFormContainer } />
                    <AuthRoute exact path="/signup" component={ SignupFormContainer } />
                </Switch>
            </main>

            <footer className="footer">
                <h4></h4>
            </footer>
        </div>
    )
};

export default App;