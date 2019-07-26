import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CloseIcon from '@material-ui/icons/Close';
import Checkmark from '@material-ui/icons/CheckCircle';
import styles from './reset-password-form.module.css';

const SnackbarComponent = props => (
  <Snackbar
    className={styles.snackbar}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    open={props.isSnackbarOpen}
    autoHideDuration={10000}
    onClose={() => props.setSnackbar(false)}
  >
    <SnackbarContent
      className={styles.snackbarContent}
      message={
        <div className={styles.message}>
          <Checkmark className={styles.checkmark} />
          Password Successfully Reset!
        </div>
      }
      action={[
        <IconButton className={styles.iconButton} onClick={() => props.setSnackbar(false)}>
          <CloseIcon className={styles.icon} />
        </IconButton>,
      ]}
    />
  </Snackbar>
);
SnackbarComponent.propTypes = {
  setSnackbar: PropTypes.func,
  isSnackbarOpen: PropTypes.func,
};

SnackbarComponent.defaultProps = {
  setSnackbar: PropTypes.func,
  isSnackbarOpen: PropTypes.func,
};
export default SnackbarComponent;
