import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as snackbarActions from '../../actions/snackbar';
import Snackbar from '../../components/reset-password/snackbar';

const mapStateToProps = state => ({
  isSnackbarOpen: state.login.isSnackbarOpen,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...snackbarActions,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Snackbar);
