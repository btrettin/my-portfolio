import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '@material-ui/core/Button';
import { FormController } from '../../../../components/FormController/FormController';
import styles from './profile-form.module.css';

export const ProfileForm = () => {
  const [disabled, setDisabled] = useState(false);
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
  });
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
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
            <div id="nameFields" className={styles.row}>
              <div id="firstnameField" className={styles.field}>
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
                <ErrorMessage className={styles.error} name="firstName" component="div" />
              </div>
              <div id="lastnameField" className={styles.field}>
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
                <ErrorMessage className={styles.error} name="lastName" component="div" />
              </div>
            </div>
            <div id="emailField" className={styles.field}>
              <Field
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
              <ErrorMessage className={styles.error} name="email" component="div" />
            </div>
            <div className={styles.buttonDiv}>
              <Button
                className={{ disabled } ? styles.button : styles.button}
                disabled={disabled}
                type="submit"
              >
                Save
              </Button>
              <ErrorMessage>
                {() => <div className={styles.error}>{formikProps.errors.general}</div>}
              </ErrorMessage>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default ProfileForm;
