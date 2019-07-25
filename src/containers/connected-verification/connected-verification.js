import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as verificationActions from '../../actions/verification';
import Verification from '../../components/reset-password/verification';

const mapStateToProps = state => ({
  isVerificationOpen: state.login.isVerificationOpen,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...verificationActions,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Verification);
