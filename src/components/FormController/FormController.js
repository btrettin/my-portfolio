import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import styles from './FormController.module.css';

export const FormController = props => (
  <FormControl className={styles.controller}>
    <InputLabel
      className={
        props.form.touched[props.field.name] && props.form.errors[props.field.name]
          ? styles.labelError
          : styles.label
      }
    >
      {props.label}
    </InputLabel>
    <Input
      className={styles.input}
      type={props.type}
      {...props.field}
      error={
        (props.form.touched &&
          props.form.touched[props.field.name] &&
          props.form.errors[props.field.name] &&
          true) !== undefined
      }
    />
  </FormControl>
);

FormController.propTypes = {
  form: PropTypes.shape({
    touched: PropTypes.objectOf(PropTypes.string),
    errors: PropTypes.objectOf(PropTypes.string),
  }),
  field: PropTypes.shape({
    name: PropTypes.string,
  }),
};

FormController.defaultProps = {
  form: PropTypes.shape({
    touched: {},
    errors: {},
  }),
  field: PropTypes.shape({
    name: '',
  }),
};

export default FormController;
