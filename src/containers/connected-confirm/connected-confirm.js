import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ConfirmComponent from '../../components/register/confirm';
import * as registerActions from '../../actions/confirm';

const mapStateToProps = state => ({
  isConfirmOpen: state.login.isConfirmOpen,
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
)(ConfirmComponent);
