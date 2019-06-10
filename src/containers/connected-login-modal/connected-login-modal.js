import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginModalActions from '../../actions/login-modal';
import LoginModalComponent from '../../components/login-modal';

const mapStateToProps = state => ({
  isLoginModalOpen: state.login.isLoginModalOpen,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...loginModalActions,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginModalComponent);
