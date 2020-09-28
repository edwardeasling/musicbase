import React from "react";
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header className="header">
            <h1>MusicBase App</h1>
            <GreetingContainer />
        </header>

        <main>
            <Switch>
                <AuthRoute exact path="/login" component={ LoginFormContainer } />
                <AuthRoute exact path="/signup" component={ SignupFormContainer } />
            </Switch>
        </main>

        <footer>
            <h4>Footer placeholder</h4>
        </footer>
    </div>
);

export default App;