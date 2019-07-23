import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormController } from '../../../../components/FormController/FormController';
import styles from './payments-form.module.css';

export const PaymentsForm = () => {
  const firstNameIsTooShortMessage = 'First name is too short!';
  const firstNameISTooLongMessage = 'First name is too long!';
  const lastNameIsTooShortMessage = 'Last name is too short!';
  const lastNameISTooLongMessage = 'Last name is too long!';
  const invalidEmailMessage = 'Not a valid Email!';

  const ProfileSchema = Yup.object().shape({
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
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }}
      validationSchema={ProfileSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
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
                      label="girehgrghreughruighruih"
                      id="firstNameFormController"
                      form={form}
                      field={field}
                    />
                  )}
                />
                <ErrorMessage className={styles.errorMessage} name="firstName" component="div" />
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
                <ErrorMessage className={styles.errorMessage} name="lastName" component="div" />
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
              <ErrorMessage className={styles.errorMessage} name="password" component="div" />
            </div>
            <React.Fragment>
              <button className={styles.button} type="submit">
                Sign Up
              </button>
              <ErrorMessage>
                {() => <div className={styles.errorMessage}>{formikProps.errors.general}</div>}
              </ErrorMessage>
            </React.Fragment>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default PaymentsForm;
