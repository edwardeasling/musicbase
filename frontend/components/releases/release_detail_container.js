import ReleaseDetail from './release_detail';
import { connect } from 'react-redux';
import { fetchSingleRelease } from '../../actions/release_actions';
import { fetchTracks } from '../../actions/track_actions';

const mapStateToProps = ({entities, session}) => ({
    releases: entities.releases,
    tracks: entities.tracks,
    artists: entities.artists,
    currentUserId: session.id,
});

const mapDispatchToProps = (dispatch) => ({
    fetchSingleRelease: releaseId => dispatch(fetchSingleRelease(releaseId)),
    fetchTracks: releaseId => dispatch(fetchTracks(releaseId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReleaseDetail);
