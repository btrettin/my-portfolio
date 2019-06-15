import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import ContactSupport from '@material-ui/icons/ContactSupport';
import styles from './navbar-mobile.module.css';

const styling = {
  root: {
    position: 'fixed',
    bottom: '0',
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    height: '4.5em',
    zIndex: '999',
  },
  actionItem: {
    color: '#313131',
    fontSize: '.95em',
    '&$selected': {
      color: '#3da601',
      fontSize: '1.05em',
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
          label="About Me"
          value="about me"
          icon={
            <SvgIcon className={styles.menuIcon}>
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
            </SvgIcon>
          }
        />
        <BottomNavigationAction
          classes={{
            label: classes.actionItem,
            root: classes.actionItem,
            selected: classes.selected,
          }}
          label="Projects"
          value="projects"
          icon={
            <SvgIcon
              className={styles.homeIcon}
              xmlns="http://www.w3.org/2000/svg"
              height="496pt"
              viewBox="0 0 496 496"
              width="496pt"
            >
              <path d="m496 0h-496v336h147.953125l-59.953125 142.382812v17.617188h61.414062l64-160h2.585938v128h64v-128h2.585938l64 160h61.414062v-17.617188l-59.953125-142.382812h147.953125zm-16 16v256h-464v-256zm-341.414062 464h-33.90625l60.632812-144h30.871094zm125.414062-32h-32v-112h32zm127.320312 32h-33.90625l-57.597656-144h30.871094zm-375.320312-160v-32h464v32zm0 0" />
              <path d="m288 168c0 48.519531 39.480469 88 88 88s88-39.480469 88-88-39.480469-88-88-88-88 39.480469-88 88zm16.472656 8h63.527344v63.527344c-33.3125-3.703125-59.824219-30.207032-63.527344-63.527344zm143.527344-8c0 37-28.054688 67.535156-64 71.527344v-143.054688c35.945312 3.992188 64 34.527344 64 71.527344zm-80-71.527344v63.527344h-63.527344c3.703125-33.320312 30.214844-59.824219 63.527344-63.527344zm0 0" />
              <path d="m48 117.449219v74.550781h128v-74.550781l11 8.796875 9.992188-12.492188-84.992188-67.992187-85 67.992187 9.992188 12.492188zm80 58.550781h-32v-32h32zm32-71.351562v71.351562h-16v-48h-64v48h-16v-71.351562l48-38.402344zm0 0" />
              <path d="m32 240h16v16h-16zm0 0" />
              <path d="m64 240h128v16h-128zm0 0" />
              <path d="m32 208h160v16h-160zm0 0" />
              <path d="m224 48h16v72h16v-72h16v56h16v-56h16v32h16v-48h-112v72h16zm0 0" />
            </SvgIcon>
          }
        />
        <BottomNavigationAction
          classes={{
            label: classes.actionItem,
            root: classes.actionItem,
            selected: classes.selected,
          }}
          label="Contact"
          value="contact"
          icon={<ContactSupport className={styles.homeIcon} />}
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
