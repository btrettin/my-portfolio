import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import LoginModal from '../../../../containers/connected-login-modal';
import SignupModal from '../../../../containers/connected-signup-modal';
import styles from './review-modal.module.css';

const MyButton = styled(Button)`
  &&& {
    :active {
      background-color: #197307 !important;
      transform: translateY(4px) !important;
    }
  }
`;

export const ReviewModal = (props) => {
  const [open, handleOpen] = useState(false);
  return (
    <div className={styles.reviewModal}>
      <MyButton className={styles.modalButton} onClick={() => handleOpen(true)}>
        Submit Request
      </MyButton>
      <Dialog open={open} onClose={() => handleOpen(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" className={styles.modalHeader}>
          To Make A Request Please...
        </DialogTitle>
        <DialogContent />
        <DialogActions>
          <SignupModal
            onClick={() => handleOpen(false)}
            size="big"
            fluid
            signupButton={styles.signupButton}
            history={props.history}
            destination="/pipeline/requestReview"
            requestInProgress={props.requestInProgress}
          />
          <h1> OR </h1>
          <LoginModal
            onClick={() => handleOpen(false)}
            size="big"
            fluid
            loginButton={styles.loginButton}
            history={props.history}
            destination="/pipeline/requestReview"
            requestInProgress={props.requestInProgress}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

ReviewModal.propTypes = {
  requestInProgress: PropTypes.func,
  history: PropTypes.func,
};

ReviewModal.defaultProps = {
  requestInProgress: PropTypes.func,
  history: PropTypes.func,
};
export default ReviewModal;
