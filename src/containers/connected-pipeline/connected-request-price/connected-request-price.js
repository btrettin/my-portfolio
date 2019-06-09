import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pipelineActions from '../../../actions/pipeline';
import RequestPriceComponent from '../../../pages/pipeline/request-price';

const mapStateToProps = state => ({
  typeOfRequest: state.requests.selection,
  requestPrice: state.requests.requestPrice,
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
)(RequestPriceComponent);
