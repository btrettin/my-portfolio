import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Auth } from 'aws-amplify';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import styles from './register-form.module.css';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};
const firstNameIsTooShortMessage = 'First name is too short';
const firstNameISTooLongMessage = 'First name is too long';
const lastNameIsTooShortMessage = 'Last name is too short';
const lastNameISTooLongMessage = 'Last name is too long';
const invalidEmailMessage = 'Not a valid Email';
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
    .min(8, 'Must be at least 8 characters long')
    .matches(/[a-z]/, 'Must include 1 lower case letter')
    .matches(/[A-Z]/, 'Must include 1 upper case letter')
    .matches(/[A-Z]/, 'Must include 1 number'),
});
const LoginFormComponent = (props) => {
  const [showPassword, set] = useState(false);
  return (
    <div className={styles.formContainer}>
      <Formik
        validationSchema={SignupSchema}
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          const firstName = values.firstName;
          const lastName = values.lastName;
          const password = values.password;
          const username = values.email;
          try {
            const user = await Auth.signUp({
              username,
              password,
              attributes: {
                email: username,
                given_name: firstName,
                family_name: lastName,
              },
            });
            console.log(user);
            props.toggleRegister();
            props.setLoggedIn(true);
            props.setUser(user);
            return actions.setSubmitting(false);
          } catch (error) {
            actions.setFieldError('general', error.message);
            return actions.setSubmitting(false);
          }
        }}
      >
        {formikProps => (
          <Form className={styles.form}>
            <div className={styles.field}>
              <Field name="firstName" type="text">
                {({ field, form }) => (
                  <FormControl className={styles.addressContainer}>
                    <InputLabel
                      className={
                        form.touched[field.name] && form.errors[field.name]
                          ? styles.fieldLabelError
                          : styles.fieldLabel
                      }
                    >
                      First Name
                    </InputLabel>
                    <Input
                      error={form.touched[field.name] && form.errors[field.name]}
                      className={styles.input}
                      {...field}
                    />
                  </FormControl>
                )}
              </Field>
              <ErrorMessage name="firstName">
                {msg => <div className={styles.inputError}>{msg}</div>}
              </ErrorMessage>
            </div>
            <div className={styles.field}>
              <Field name="lastName" type="text">
                {({ field, form }) => (
                  <FormControl className={styles.addressContainer}>
                    <InputLabel
                      className={
                        form.touched[field.name] && form.errors[field.name]
                          ? styles.fieldLabelError
                          : styles.fieldLabel
                      }
                    >
                      Last Name
                    </InputLabel>
                    <Input
                      error={form.touched[field.name] && form.errors[field.name]}
                      className={styles.input}
                      {...field}
                    />
                  </FormControl>
                )}
              </Field>
              <ErrorMessage name="lastName">
                {msg => <div className={styles.inputError}>{msg}</div>}
              </ErrorMessage>
            </div>
            <div className={styles.field}>
              <Field name="email" type="text">
                {({ field, form }) => (
                  <FormControl className={styles.addressContainer}>
                    <InputLabel
                      className={
                        form.touched[field.name] && form.errors[field.name]
                          ? styles.fieldLabelError
                          : styles.fieldLabel
                      }
                    >
                      Email
                    </InputLabel>
                    <Input
                      error={form.touched[field.name] && form.errors[field.name]}
                      className={styles.input}
                      {...field}
                    />
                  </FormControl>
                )}
              </Field>
              <ErrorMessage name="email">
                {msg => <div className={styles.inputError}>{msg}</div>}
              </ErrorMessage>
            </div>
            <div className={styles.field}>
              <Field name="password" type="password">
                {({ field, form }) => (
                  <FormControl className={styles.addressContainer}>
                    <InputLabel
                      className={
                        form.touched[field.name] && form.errors[field.name]
                          ? styles.fieldLabelError
                          : styles.fieldLabel
                      }
                    >
                      Create a Password
                    </InputLabel>
                    <Input
                      error={form.touched[field.name] && form.errors[field.name]}
                      type={showPassword ? 'text' : 'password'}
                      className={styles.input}
                      {...field}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Toggle password visibility"
                            onClick={() => set(!showPassword)}
                          >
                            {showPassword ? (
                              <Visibility className={styles.visibility} />
                            ) : (
                              <VisibilityOff className={styles.visibility} />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                )}
              </Field>
              <ErrorMessage name="password">
                {msg => <div className={styles.inputError}>{msg}</div>}
              </ErrorMessage>
            </div>
            <React.Fragment>
              <Button className={styles.submitButton} type="submit">
                Sign Up
              </Button>
              <ErrorMessage>
                {() => <div className={styles.inputError}>{formikProps.errors.general}</div>}
              </ErrorMessage>
            </React.Fragment>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default LoginFormComponent;
