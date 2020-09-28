import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    errors: state.errors.session.errors,
    formType: 'login'
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
