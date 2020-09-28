import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    errors: state.errors.session.errors,
    formType: 'signup'
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
