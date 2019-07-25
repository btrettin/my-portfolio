import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormControl from '@material-ui/core/FormControl';
import { Auth } from 'aws-amplify';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import styles from './verification-form.module.css';

const initialValues = {
  code: '',
  email: '',
  password: '',
};
const invalidEmailMessage = 'Not a valid Email';
const VerificationSchema = Yup.object().shape({
  code: Yup.number()
    .typeError('Must be a 6 digit code')
    .required('Required*'),
  email: Yup.string()
    .email(invalidEmailMessage)
    .required('Required*'),
  password: Yup.string()
    .required('Required*')
    .min(8, 'Must be at least 8 characters long')
    .matches(/[a-z]/, 'Must include 1 lower case letter')
    .matches(/[A-Z]/, 'Must include 1 upper case letter')
    .matches(/[A-Z]/, 'Must include 1 number')
    .matches(/[0-9]/, 'Must include a number'),
});

const VerificationForm = (props) => {
  const [showPassword, set] = useState(false);
  return (
    <div className={styles.formContainer}>
      <Formik
        validationSchema={VerificationSchema}
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          const code = values.code;
          const email = values.email;
          const password = values.password;
          try {
            await Auth.forgotPasswordSubmit(email, code, password);
            props.toggleVerification();
            props.setSnackbar(true);
            return actions.setSubmitting(false);
          } catch (error) {
            console.log(error);
            let message = 'Email not associated with an account';
            if (error.message === 'Invalid verification code provided, please try again.') {
              message = 'Invalid Code';
            }
            actions.setFieldError('general', message);
            return actions.setSubmitting(false);
          }
        }}
      >
        {formikProps => (
          <Form className={styles.form}>
            <div className={styles.field}>
              <Field name="code" type="text">
                {({ field, form }) => (
                  <FormControl className={styles.addressContainer}>
                    <InputLabel
                      className={
                        form.touched[field.name] && form.errors[field.name]
                          ? styles.fieldLabelError
                          : styles.fieldLabel
                      }
                    >
                      Verification Code
                    </InputLabel>
                    <Input
                      error={form.touched[field.name] && form.errors[field.name]}
                      className={styles.input}
                      {...field}
                    />
                  </FormControl>
                )}
              </Field>
              <ErrorMessage name="code">
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
                      Create new Password
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
                Reset Password
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
export default VerificationForm;
