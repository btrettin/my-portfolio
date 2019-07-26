import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './confirm.module.css';

export const Confirm = props => (
  <div>
    <Dialog open={props.isConfirmOpen}>
      <DialogTitle>
        <h2 className={styles.title}>Email Confirmation Sent</h2>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <h3 className={styles.text}>
            Please confirm your email addresss by clicking on the link sent to your email address.
          </h3>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          className={styles.button}
          onClick={() => props.toggleConfirm(false)}
          color="primary"
          autoFocus
        >
          Got It
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);
Confirm.propTypes = {
  toggleConfirm: PropTypes.func,
  isConfirmOpen: PropTypes.func,
};

Confirm.defaultProps = {
  toggleConfirm: PropTypes.func,
  isConfirmOpen: PropTypes.func,
};
export default Confirm;
