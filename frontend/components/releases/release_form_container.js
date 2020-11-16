import Releaseform from './release_form';
import { connect } from 'react-redux';
import { createNewRelease } from '../../actions/release_actions';

const mapStateToProps = (state) => ({
    currentUserId: state.session.id,
    errors: state.errors.release.errors,
});

const mapDispatchToProps = (dispatch) => ({
    createNewRelease: (release, artistId) => dispatch(createNewRelease(release, artistId))
});



export default connect(mapStateToProps, mapDispatchToProps)(Releaseform);
