import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import SvgIcon from '@material-ui/core/SvgIcon';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './request-price.module.css';
import BreadcrumbComponent from '../../../components/breadcrumb';

const MyButton = styled(Button)`
  &&& {
    :active {
      background-color: #221891 !important;
      transform: translateY(4px) !important;
    }
  }
`;

const styling = () => ({
  lightTooltip: {
    backgroundColor: 'white',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 11,
  },
});

export const RequestPrice = (props) => {
  let buttonString = 'Continue';
  if (props.pageInProgress > 3) {
    buttonString = 'Save';
  }
  if (props.pageInProgress < 3) {
    return <Redirect to="/pipeline/requestLocation" />;
  }

  return (
    <Grid
      md={9}
      lg={8}
      xl={7}
      alignItems="center"
      alignContent="center"
      justify="center"
      container
      spacing={24}
      className={styles.grid}
      verticalAlign="middle"
    >
      <Grid item sm={12} className={styles.breadRow}>
        <BreadcrumbComponent selection={props.pageInProgress} current={3} />
      </Grid>
      <Grid item sm={12} className={styles.headerRow}>
        <Tooltip
          disableFocusListener
          className={styles.tooltipDiv}
          classes={{ Tooltip: styles.lightTooltip }}
          title={<h1 className={styles.tooltipText}>Please set a price that you would like.</h1>}
          placement="right-start"
        >
          <Badge
            badgeContent={
              <SvgIcon className={styles.tooltipIcon}>
                <path d="M14.601 21.5c0 1.38-1.116 2.5-2.499 2.5-1.378 0-2.499-1.12-2.499-2.5s1.121-2.5 2.499-2.5c1.383 0 2.499 1.119 2.499 2.5zm-2.42-21.5c-4.029 0-7.06 2.693-7.06 8h3.955c0-2.304.906-4.189 3.024-4.189 1.247 0 2.57.828 2.684 2.411.123 1.666-.767 2.511-1.892 3.582-2.924 2.78-2.816 4.049-2.816 7.196h3.943c0-1.452-.157-2.508 1.838-4.659 1.331-1.436 2.986-3.222 3.021-5.943.047-3.963-2.751-6.398-6.697-6.398z" />
              </SvgIcon>
            }
            className={styles.tooltip}
          >
            <h1 className={styles.header}>Set A Price</h1>
          </Badge>
        </Tooltip>
      </Grid>
      <Grid item sm={12} className={styles.priceRow}>
        <FormControl>
          <Input
            value={props.requestPrice}
            className={styles.input}
            onChange={props.setRequestPrice}
            startAdornment={
              <InputAdornment position="start">
                <SvgIcon className={styles.priceIcon}>
                  <path d="M19 16.166c0-4.289-4.465-5.483-7.887-7.091-2.079-1.079-1.816-3.658 1.162-3.832 1.652-.1 3.351.39 4.886.929l.724-3.295c-1.814-.551-3.437-.803-4.885-.841v-2.036h-2v2.134c-3.89.535-5.968 2.975-5.968 5.7 0 4.876 5.693 5.62 7.556 6.487 2.54 1.136 2.07 3.5-.229 4.021-1.993.451-4.538-.337-6.45-1.079l-.909 3.288c1.787.923 3.931 1.417 6 1.453v1.996h2v-2.105c3.313-.464 6.005-2.293 6-5.729z" />
                </SvgIcon>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid item sm={12} className={styles.buttonRow}>
        <Link to="/pipeline/requestReview">
          <MyButton
            size="large"
            className={styles.button}
            onClick={() => {
              props.requestInProgress(4);
            }}
          >
            {buttonString}
          </MyButton>
        </Link>
      </Grid>
    </Grid>
  );
};
RequestPrice.propTypes = {
  pageInProgress: PropTypes.number,
  requestPrice: PropTypes.number,
  setRequestPrice: PropTypes.func,
  requestInProgress: PropTypes.number,
};

RequestPrice.defaultProps = {
  pageInProgress: 0,
  requestPrice: 0,
  setRequestPrice: PropTypes.func,
  requestInProgress: 0,
};
export default withStyles(styling)(RequestPrice);
