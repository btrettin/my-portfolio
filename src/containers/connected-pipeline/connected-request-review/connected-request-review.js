import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pipelineActions from '../../../actions/pipeline';
import RequestReviewComponent from '../../../pages/pipeline/request-review';

const mapStateToProps = state => ({
  requests: state.requests,
  pageInProgress: state.requests.requestInProgress,
  isLoggedIn: state.login.isLoggedIn,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...pipelineActions,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RequestReviewComponent);
