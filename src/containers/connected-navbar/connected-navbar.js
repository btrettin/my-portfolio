import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as navbarActions from '../../actions/navbar';
import NavbarComponent from '../../components/navbar';

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
  user: state.login.user,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...navbarActions,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavbarComponent);
