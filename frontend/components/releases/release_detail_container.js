import ReleaseDetail from './release_detail';
import { connect } from 'react-redux';
import { fetchSingleRelease } from '../../actions/release_actions';
import { fetchTracks } from '../../actions/track_actions';

const mapStateToProps = ({entities}) => ({
    releases: entities.releases
});

const mapDispatchToProps = (dispatch) => ({
    fetchSingleRelease: releaseId => dispatch(fetchSingleRelease(releaseId)),
    fetchTracks: releaseId => dispatch(fetchTracks(releaseId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReleaseDetail);
