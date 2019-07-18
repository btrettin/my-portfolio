import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginModalActions from '../../actions/login';
import LoginModalComponent from '../../components/login';

const mapStateToProps = state => ({
  isLoginOpen: state.login.isLoginOpen,
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
