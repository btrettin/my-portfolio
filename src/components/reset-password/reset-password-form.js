import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormControl from '@material-ui/core/FormControl';
import { Auth } from 'aws-amplify';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import styles from './reset-password-form.module.css';

const initialValues = {
  email: '',
};
const ResetForm = props => (
  <div className={styles.formContainer}>
    <Formik
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Not a valid email address')
          .required('Required*'),
      })}
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        const username = values.email;
        try {
          await Auth.forgotPassword(username);
          props.swapVerification();
          props.setSnackbar(true);
          return actions.setSubmitting(false);
        } catch (error) {
          const message = 'Email Not Found';
          actions.setFieldError('general', message);
          return actions.setSubmitting(false);
        }
      }}
    >
      {formikProps => (
        <Form className={styles.form}>
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
                    Email Address
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
          <React.Fragment>
            <Button className={styles.submitButton} type="submit">
              Send Email
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
export default ResetForm;
