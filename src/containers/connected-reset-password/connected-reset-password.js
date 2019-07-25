import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as resetPasswordActions from '../../actions/reset-password';
import ResetPasswordComponent from '../../components/reset-password';

const mapStateToProps = state => ({
  isResetPasswordOpen: state.login.isResetPasswordOpen,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...resetPasswordActions,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPasswordComponent);
