import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './verification.module.css';
import VerificationForm from './verification-form';

const Verification = props => (
  <div>
    <Dialog
      open={props.isVerificationOpen}
      aria-labelledby="form-dialog-title"
      className={styles.Dialog}
    >
      <div className={styles.contentDiv}>
        <DialogTitle id="form-dialog-title" className={styles.modalHeader}>
          <h2 className={styles.headerText}> Reset Password </h2>
          <h3 className={styles.subHeaderText}>
            Enter the verification code sent to your email and choose your new password
          </h3>
        </DialogTitle>
        <DialogContent className={styles.loginContent}>
          <VerificationForm
            setSnackbar={props.setSnackbar}
            toggleVerification={props.toggleVerification}
          />
          <div className={styles.signupDiv}>
            <Button onClick={props.swapVerification} className={styles.signupButton}>
              Resend Code
            </Button>
          </div>
        </DialogContent>
        <DialogActions className={styles.modalAction}>
          <Button onClick={props.toggleVerification} className={styles.closeButton}>
            <SvgIcon className={styles.closeIcon}>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </SvgIcon>
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  </div>
);

Verification.propTypes = {
  setSnackbar: PropTypes.func,
  toggleVerification: PropTypes.func,
  isVerificationOpen: PropTypes.func,
  swapVerification: PropTypes.func,
};

Verification.defaultProps = {
  setSnackbar: PropTypes.func,
  toggleVerification: PropTypes.func,
  isVerificationOpen: PropTypes.func,
  swapVerification: PropTypes.func,
};
export default Verification;
