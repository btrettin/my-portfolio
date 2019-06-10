import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Step from './breadcrumb-step';
import styles from './breadcrumb.module.css';

export const Breadcrumb = props => (
  <Grid className={styles.grid}>
    <Step
      value={0}
      name="Selection"
      current={props.current}
      selection={props.selection}
      link="/pipeline"
    />
    <Step
      value={1}
      name="Details"
      current={props.current}
      selection={props.selection}
      link="/pipeline/requestInformation"
    />
    <Step
      value={2}
      name="Location"
      current={props.current}
      selection={props.selection}
      link="/pipeline/requestLocation"
    />
    <Step
      value={3}
      name="Price"
      current={props.current}
      selection={props.selection}
      link="/pipeline/requestPrice"
    />
    <Step
      last
      value={4}
      name="Review"
      current={props.current}
      selection={props.selection}
      link="/pipeline/requestReview"
    />
  </Grid>
);
Breadcrumb.propTypes = {
  current: PropTypes.number,
  selection: PropTypes.number,
};

Breadcrumb.defaultProps = {
  current: 0,
  selection: 0,
};

export default Breadcrumb;
