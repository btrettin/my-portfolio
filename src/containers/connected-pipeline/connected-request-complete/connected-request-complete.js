import { connect } from 'react-redux';
import RequestCompleteComponent from '../../../pages/pipeline/request-complete';

const mapStateToProps = state => ({
  pageInProgress: state.requests.requestInProgress,
});

export default connect(
  () => mapStateToProps,
  {},
)(RequestCompleteComponent);
