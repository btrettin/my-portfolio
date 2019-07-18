import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './login.module.css';
import LoginForm from './login-form';

class loginModal extends Component {
  constructor() {
    super();
    this.state = {
      loginUserError: null,
      open: false,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.props.toggleLogin} className={styles.loginButton}>
          Login
        </Button>
        <Dialog
          open={this.props.isLoginOpen}
          onClose={this.props.toggleLogin}
          aria-labelledby="form-dialog-title"
          classes={{ paper: classes.paperOverride }}
          className={styles.Dialog}
        >
          <div className={styles.contentDiv}>
            <DialogTitle id="form-dialog-title" className={styles.modalHeader}>
              <h2 className={styles.headerText}> Lawn Nanny </h2>
            </DialogTitle>
            <DialogContent className={styles.loginContent}>
              <LoginForm />
              <div className={styles.signupDiv}>
                <h2 className={styles.signupText}>Dont have an account?</h2>
                <Button onClick={this.props.swapModal} className={styles.signupButton}>
                  Sign Up
                </Button>
              </div>
            </DialogContent>
            <DialogActions className={styles.modalAction}>
              <Button onClick={this.props.toggleLogin} className={styles.closeButton}>
                <SvgIcon className={styles.closeIcon}>
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </SvgIcon>
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      </div>
    );
  }
}
loginModal.propTypes = {
  swapModal: PropTypes.func,
  isLoginOpen: PropTypes.func,
  classes: PropTypes.func,
  toggleLogin: PropTypes.func,
};

loginModal.defaultProps = {
  swapModal: PropTypes.func,
  isLoginOpen: PropTypes.func,
  classes: PropTypes.func,
  toggleLogin: PropTypes.func,
};
export default loginModal;
