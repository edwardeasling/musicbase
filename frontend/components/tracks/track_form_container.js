import TrackForm from './track_form';
import { connect } from 'react-redux';
import { fetchUserInfo } from '../../actions/release_actions';
import { createNewTrack } from '../../actions/track_actions';

const mapStateToProps = ({ entities, session, errors}) => ({
    releases: entities.releases,
    currentUserId: session.id,
    errors: errors.track.errors
});

const mapDispatchToProps = (dispatch) => ({
    fetchReleases: (artistId) => dispatch(fetchUserInfo(artistId)),
    createNewTrack: (track) => dispatch(createNewTrack(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackForm);
