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
import { Auth } from 'aws-amplify';
import { FormController } from '../FormController/FormController';
import styles from './register.module.css';

export const Register = (props) => {
  const firstNameIsTooShortMessage = 'First name is too short!';
  const firstNameISTooLongMessage = 'First name is too long!';
  const lastNameIsTooShortMessage = 'Last name is too short!';
  const lastNameISTooLongMessage = 'Last name is too long!';
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
      .required('Required*')
      .min(8, 'Password must be at least 8 characters long')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters')
      .matches(/[a-z]/, 'Password must include 1 lower case letter')
      .matches(/[A-Z]/, 'Password must include 1 upper case letter')
      .matches(/[A-Z]/, 'Password must include 1 number'),
  });
  return (
    <div>
      <Button
        onClick={props.toggleRegister}
        className={
          props.location.pathname === '/HomePage'
            ? styles.registerButton
            : styles.registerButtonBlack
        }
      >
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
              onSubmit={async (values, actions) => {
                const firstName = values.firstName;
                const lastName = values.lastName;
                const password = values.password;
                const username = values.email;
                try {
                  const signUpResponse = await Auth.signUp({
                    username,
                    password,
                    attributes: {
                      email: username,
                      given_name: firstName,
                      family_name: lastName,
                    },
                  });
                  console.log(signUpResponse);
                  return actions.setSubmitting(false);
                } catch (error) {
                  actions.setFieldError('general', error.message);
                  return actions.setSubmitting(false);
                }
              }}
            >
              {formikProps => (
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
                    <React.Fragment>
                      <button className={styles.button} type="submit">
                        Sign Up
                      </button>
                      <ErrorMessage>
                        {() => (
                          <div className={styles.errorMessage}>{formikProps.errors.general}</div>
                        )}
                      </ErrorMessage>
                    </React.Fragment>
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
  location: PropTypes.func,
  isRegisterOpen: PropTypes.func,
  toggleRegister: PropTypes.func,
  swapModal: PropTypes.func,
};

Register.defaultProps = {
  location: PropTypes.func,
  isRegisterOpen: PropTypes.func,
  toggleRegister: PropTypes.func,
  swapModal: PropTypes.func,
};
export default Register;
