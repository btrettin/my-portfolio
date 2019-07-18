import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegisterComponent from '../../components/register';
import * as registerActions from '../../actions/register';

const mapStateToProps = state => ({
  isRegisterOpen: state.login.isRegisterOpen,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...registerActions,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterComponent);
