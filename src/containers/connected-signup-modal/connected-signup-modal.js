import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignupModalComponent from '../../components/signup-modal';
import * as signupModalActions from '../../actions/signup-modal';

const mapStateToProps = state => ({
  isSignupModalOpen: state.login.isSignupModalOpen,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...signupModalActions,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupModalComponent);
