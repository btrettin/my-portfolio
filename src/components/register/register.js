import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import SvgIcon from '@material-ui/core/SvgIcon';
import DialogActions from '@material-ui/core/DialogActions';
import * as Yup from 'yup';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormController } from '../FormController/FormController';
import styles from './register.module.css';

export const Register = (props) => {
  const firstNameIsTooShortMessage = 'First name is too short!';
  const firstNameISTooLongMessage = 'First name is too long!';
  const lastNameIsTooShortMessage = 'Last name is too short!';
  const lastNameISTooLongMessage = 'Last name is too long!';
  const passwordIsTooShortMessage = 'Password is too short!';
  const invalidEmailMessage = 'Not a valid Email!';

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, firstNameIsTooShortMessage)
      .max(30, firstNameISTooLongMessage)
      .required('Required*'),
    lastName: Yup.string()
      .min(2, lastNameIsTooShortMessage)
      .max(30, lastNameISTooLongMessage)
      .required('Required*'),
    email: Yup.string()
      .email(invalidEmailMessage)
      .required('Required*'),
    password: Yup.string()
      .min(8, passwordIsTooShortMessage)
      .required('Required*'),
  });
  return (
    <div>
      <Button onClick={props.toggleRegister} className={styles.registerButton}>
        Register
      </Button>
      <Dialog className={styles.dialog} open={props.isRegisterOpen} onClose={props.toggleRegister}>
        <div className={styles.contentDiv}>
          <DialogTitle className={styles.title}>
            <h1 className={styles.titleText}>Get Started</h1>
          </DialogTitle>
          <DialogContent className={styles.content}>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={() => 5}
            >
              {() => (
                <div>
                  <Form className={styles.form}>
                    <div id="nameFields" className={styles.fieldDivRow}>
                      <div id="firstnameField" className={styles.fieldFirstName}>
                        <Field
                          name="firstName"
                          render={({ field, form }) => (
                            <FormController
                              type="text"
                              label="First Name"
                              id="firstNameFormController"
                              form={form}
                              field={field}
                            />
                          )}
                        />
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="firstName"
                          component="div"
                        />
                      </div>
                      <div id="lastnameField" className={styles.fieldLastName}>
                        <Field
                          name="lastName"
                          render={({ field, form }) => (
                            <FormController
                              type="text"
                              label="Last Name"
                              id="lastNameFormController"
                              form={form}
                              field={field}
                            />
                          )}
                        />
                        <ErrorMessage
                          className={styles.errorMessage}
                          name="lastName"
                          component="div"
                        />
                      </div>
                    </div>
                    <div id="emailField" className={styles.fieldDiv}>
                      <Field
                        className={styles.fieldColumn}
                        name="email"
                        render={({ field, form }) => (
                          <FormController
                            type="email"
                            label="Email"
                            id="emailFormController"
                            form={form}
                            field={field}
                          />
                        )}
                      />
                      <ErrorMessage className={styles.errorMessage} name="email" component="div" />
                    </div>
                    <div id="passwordField" className={styles.fieldDiv}>
                      <Field
                        className={styles.fieldColumn}
                        name="password"
                        render={({ field, form }) => (
                          <FormController
                            type="password"
                            label="Password"
                            id="passwordFormController"
                            form={form}
                            field={field}
                          />
                        )}
                      />
                      <ErrorMessage
                        className={styles.errorMessage}
                        name="password"
                        component="div"
                      />
                    </div>
                    <button className={styles.button} type="submit">
                      Sign Up
                    </button>
                  </Form>
                </div>
              )}
            </Formik>
            <div className={styles.signupDiv}>
              <h2 className={styles.signupText}>Dont have an account?</h2>
              <Button onClick={props.swapModal} className={styles.signupButton}>
                Sign Up
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
};

Register.propTypes = {
  isRegisterOpen: PropTypes.func,
  toggleRegister: PropTypes.func,
  swapModal: PropTypes.func,
};

Register.defaultProps = {
  isRegisterOpen: PropTypes.func,
  toggleRegister: PropTypes.func,
  swapModal: PropTypes.func,
};
export default Register;
