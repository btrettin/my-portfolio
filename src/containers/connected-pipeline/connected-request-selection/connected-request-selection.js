import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pipelineActions from '../../../actions/pipeline';
import RequestSelectionComponent from '../../../pages/pipeline/request-selection';

const mapStateToProps = state => ({
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
  () => mapStateToProps,
  mapDispatchToProps,
)(RequestSelectionComponent);
