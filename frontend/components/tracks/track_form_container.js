import TrackForm from './track_form';
import { connect } from 'react-redux';
import { fetchUserInfo } from '../../actions/release_actions';
// import { createTrack } from '../../actions/track_actions';

const mapStateToProps = ({ entities, session }) => ({
    releases: entities.releases,
    currentUserId: session.id
    // errors: state.errors.release.errors,
});

const mapDispatchToProps = (dispatch) => ({
    fetchReleases: (artistId) => dispatch(fetchUserInfo(artistId))
    // createTrack: (track) => dispatch(createTrack(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackForm);
