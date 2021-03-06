import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import ReleasesIndexContainer from './releases/releases_index_container';
import ReleaseFormContainer from './releases/release_form_container';
import TrackFormContainer from './tracks/track_form_container';
import ReleaseDetailContainer from './releases/release_detail_container';
import ArtistDetailContainer from './artist/artist_detail_container';
import SearchContainer from './search/search_container';

const App = () => {

    return( 
        <div className="page-container">
            <header className="header">
                <section className="header-left">
                    <Link to="/"><img src={window.logo} className="header-left-logo" /></Link>
                    <h4 className="header-left-text">Get new music directly from artists and labels</h4>
                </section>
                <div className="header-middle"/>
                <GreetingContainer />
            </header>

            <main className="main">
                <Switch>
                    <AuthRoute exact path="/login" component={ LoginFormContainer } />
                    <AuthRoute exact path="/signup" component={ SignupFormContainer } />
                    <Route path="/artist/:artistId/" component={ArtistDetailContainer} />
                    <Route path="/releases/:releaseId/" component={ReleaseDetailContainer} />
                    <Route path="/search/:searchText/" component={SearchContainer} />
                    <Route exact path="/" component={ ReleasesIndexContainer } />
                    <ProtectedRoute exact path="/new_release" component={ ReleaseFormContainer } />
                    <ProtectedRoute exact path="/new_track/:releaseId" component={ TrackFormContainer } />
                </Switch> 
            </main>

            <footer className="footer">
                <ul className="footer-list">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li className="footer-list-final"><a href="#">Legal</a></li>
                </ul>
            </footer>
        </div>
    )
};

export default App;