import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Assignment from '@material-ui/icons/Assignment';
import styles from './navbar-mobile.module.css';

const styling = {
  root: {
    position: 'fixed',
    bottom: '0',
    backgroundColor: '#f8f8f8',
    width: '100%',
    alignItems: 'center',
    height: '4em',
    zIndex: '999',
  },
  actionItem: {
    color: '#a6a6a6',
    fontSize: '.85em',
    '&$selected': {
      color: '#222222',
      fontSize: '.95em',
    },
  },
  // NOTE: You need to include a `.selected` class in your
  // styles rules for the "&$selected" selector to work.
  selected: {},
};

class LabelBottomNavigation extends React.Component {
  state = {
    value: '',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        showLabels
        value={value}
        onChange={this.handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          classes={{
            label: classes.actionItem,
            root: classes.actionItem,
            selected: classes.selected,
          }}
          label="Home"
          value="home"
          icon={<Home className={styles.homeIcon} />}
        />
        <BottomNavigationAction
          classes={{
            label: classes.actionItem,
            root: classes.actionItem,
            selected: classes.selected,
          }}
          label="Requests"
          value="requests"
          icon={<Assignment className={styles.assignmentIcon} />}
        />
        <BottomNavigationAction
          classes={{
            label: classes.actionItem,
            root: classes.actionItem,
            selected: classes.selected,
          }}
          label="Account"
          value="account"
          icon={<AccountCircle className={styles.accountIcon} />}
        />
        <BottomNavigationAction
          classes={{
            label: classes.actionItem,
            root: classes.actionItem,
            selected: classes.selected,
          }}
          label="More"
          value="more"
          icon={
            <SvgIcon className={styles.menuIcon}>
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
            </SvgIcon>
          }
        />
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.func,
};

LabelBottomNavigation.defaultProps = {
  classes: PropTypes.func,
};

export default withStyles(styling)(LabelBottomNavigation);
