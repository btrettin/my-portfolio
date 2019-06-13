import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../../components/app';
import * as appActions from '../../actions/app';

const mapStateToProps = state => ({
  isSignupModalOpen: state.login.isSignupModalOpen,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...appActions,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
