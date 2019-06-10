import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pipelineActions from '../../../actions/pipeline';
import RequestLocationComponent from '../../../pages/pipeline/request-location';

const mapStateToProps = state => ({
  requests: state.requests,
  pageInProgress: state.requests.requestInProgress,
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
)(RequestLocationComponent);
