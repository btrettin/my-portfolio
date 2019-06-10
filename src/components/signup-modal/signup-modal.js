import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import SvgIcon from '@material-ui/core/SvgIcon';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import styles from './signup-modal.module.css';

const styling = {
  paperOverride: {
    width: '25em',
    height: '40em',
    marginTop: '5em',
    margin: '0em',
  },
};

export const SignupModal = props => (
  <div className={styles.signupDiv}>
    <Button size="large" onClick={props.toggleSignupModal} className={styles.signupButton}>
      Sign Up
    </Button>
    <Dialog
      open={props.isSignupModalOpen}
      onClose={props.toggleSignupModal}
      aria-labelledby="form-dialog-title"
      classes={{ paper: props.classes.paperOverride }}
    >
      <DialogTitle id="form-dialog-title" className={styles.modalHeader}>
        <h2 className={styles.headerText}> Sign Up! </h2>
      </DialogTitle>
      <DialogContent className={styles.loginContent}>
        <h3 className={styles.divider}> or </h3>
        <Button className={styles.facebookButton}>
          <SvgIcon className={styles.facebookIcon}>
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </SvgIcon>
          <div className={styles.facebookTextDiv}>
            <h2 className={styles.facebookText}>Continue With Facebook</h2>
          </div>
        </Button>
        <Button className={styles.googleButton}>
          <SvgIcon className={styles.googleIcon}>
            <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" />
          </SvgIcon>
          <div className={styles.googleTextDiv}>
            <h2 className={styles.googleText}>Continue With Google</h2>
          </div>
        </Button>
        <div className={styles.loginDiv}>
          <h2 className={styles.loginText}>Already have an account?</h2>
          <Button onClick={props.swapModal} className={styles.loginButton}>
            Log In
          </Button>
        </div>
      </DialogContent>
      <DialogActions className={styles.modalAction}>
        <Button onClick={props.toggleSignupModal} className={styles.closeButton}>
          <SvgIcon>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </SvgIcon>
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);
SignupModal.propTypes = {
  classes: PropTypes.func,
  swapModal: PropTypes.func,
  isSignupModalOpen: PropTypes.func,
  toggleSignupModal: PropTypes.func,
};

SignupModal.defaultProps = {
  classes: PropTypes.func,
  swapModal: PropTypes.func,
  isSignupModalOpen: PropTypes.func,
  toggleSignupModal: PropTypes.func,
};
export default withStyles(styling)(SignupModal);
