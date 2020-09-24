import React from 'react';
import Greeting from './greeting.jsx';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
