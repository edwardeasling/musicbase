import Releaseform from './release_form';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    currentUserId: state.session.id,
    // errors: state.errors.release.errors,
});


export default connect(mapStateToProps, null)(Releaseform);
