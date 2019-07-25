import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './reset-password.module.css';
import ResetForm from './reset-password-form';

const ResetPassword = props => (
  <div>
    <Dialog
      open={props.isResetPasswordOpen}
      onClose={props.toggleResetPassword}
      aria-labelledby="form-dialog-title"
      className={styles.Dialog}
    >
      <div className={styles.contentDiv}>
        <DialogTitle id="form-dialog-title" className={styles.modalHeader}>
          <h2 className={styles.headerText}> Reset Password </h2>
          <h3 className={styles.subHeaderText}>
            Enter the email address associated with your account to receive a code to reset your
            password
          </h3>
        </DialogTitle>
        <DialogContent className={styles.loginContent}>
          <ResetForm
            swapVerification={props.swapVerification}
            setSnackbar={props.setSnackbar}
            toggleResetPassword={props.toggleResetPassword}
          />
          <div className={styles.signupDiv}>
            <Button onClick={props.swapResetPassword} className={styles.signupButton}>
              Back to Login
            </Button>
          </div>
        </DialogContent>
        <DialogActions className={styles.modalAction}>
          <Button onClick={props.toggleResetPassword} className={styles.closeButton}>
            <SvgIcon className={styles.closeIcon}>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </SvgIcon>
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  </div>
);

ResetPassword.propTypes = {
  swapVerification: PropTypes.func,
  setSnackbar: PropTypes.func,
  isResetPasswordOpen: PropTypes.func,
  toggleResetPassword: PropTypes.func,
  swapResetPassword: PropTypes.func,
};

ResetPassword.defaultProps = {
  swapVerification: PropTypes.func,
  setSnackbar: PropTypes.func,
  isResetPasswordOpen: PropTypes.func,
  toggleResetPassword: PropTypes.func,
  swapResetPassword: PropTypes.func,
};
export default ResetPassword;
