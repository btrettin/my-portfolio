import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Auth } from 'aws-amplify';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import styles from './login-form.module.css';

const initialValues = {
  email: '',
  password: '',
};
const LoginFormComponent = props => (
  <div className={styles.formContainer}>
    <Formik
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Not a valid email address')
          .required('Required*'),
        password: Yup.string().required('Required*'),
      })}
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        const password = values.password;
        const username = values.email;
        try {
          const user = await Auth.signIn(username, password);
          console.log(user);
          props.toggleLogin();
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
          <div>
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
                    Email{' '}
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
          <div>
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
                    Password
                  </InputLabel>
                  <Input
                    error={form.touched[field.name] && form.errors[field.name]}
                    type="password"
                    className={styles.input}
                    {...field}
                  />
                </FormControl>
              )}
            </Field>
            <ErrorMessage name="password">
              {msg => <div className={styles.inputError}>{msg}</div>}
            </ErrorMessage>
          </div>
          <React.Fragment>
            <button className={styles.submitButton} type="submit">
              Log In
            </button>
            <ErrorMessage>
              {() => <div className={styles.inputError}>{formikProps.errors.general}</div>}
            </ErrorMessage>
          </React.Fragment>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginFormComponent;
