import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './register.module.css';
import RegisterForm from './register-form';

const RegisterModal = props => (
  <div>
    <Button
      onClick={props.toggleRegister}
      className={
        props.location.pathname === '/HomePage' ? styles.loginButton : styles.loginButtonBlack
      }
    >
      Register
    </Button>
    <Dialog
      open={props.isRegisterOpen}
      onClose={props.toggleRegister}
      aria-labelledby="form-dialog-title"
      className={styles.Dialog}
    >
      <div className={styles.contentDiv}>
        <DialogTitle id="form-dialog-title" className={styles.modalHeader}>
          <h2 className={styles.headerText}> Create an Account </h2>
        </DialogTitle>
        <DialogContent className={styles.loginContent}>
          <RegisterForm
            setLoggedIn={props.setLoggedIn}
            setUser={props.setUser}
            toggleRegister={props.toggleRegister}
          />
          <div className={styles.signupDiv}>
            <h2 className={styles.signupText}>Already have an account?</h2>
            <Button onClick={props.swapModal} className={styles.signupButton}>
              Log In
            </Button>
          </div>
        </DialogContent>
        <DialogActions className={styles.modalAction}>
          <Button onClick={props.toggleRegister} className={styles.closeButton}>
            <SvgIcon className={styles.closeIcon}>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </SvgIcon>
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  </div>
);

RegisterModal.propTypes = {
  location: PropTypes.func,
  swapModal: PropTypes.func,
  isRegisterOpen: PropTypes.func,
  toggleRegister: PropTypes.func,
  setUser: PropTypes.func,
  setLoggedIn: PropTypes.func,
};

RegisterModal.defaultProps = {
  location: PropTypes.func,
  swapModal: PropTypes.func,
  isRegisterOpen: PropTypes.func,
  toggleRegister: PropTypes.func,
  setUser: PropTypes.func,
  setLoggedIn: PropTypes.func,
};
export default RegisterModal;
