import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pipelineActions from '../../../actions/pipeline';
import RequestInformationComponent from '../../../pages/pipeline/request-information';

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
)(RequestInformationComponent);
