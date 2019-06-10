import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import styles from './sidebar.module.css';

const MyItem = styled(ListItem)`
  &&& {
    :hover {
      background-color: #20ad1d;
    }
  }
`;

const styling = {
  paperOverride: {
    opacity: '.95',
    width: '22em',
    backgroundColor: 'black',
    paddingTop: '.56em',
  },
};

export const Sidebar = (props) => {
  const [isOpen, handleOpen] = useState(false);
  return (
    <div>
      <IconButton onClick={() => handleOpen(true)} className={styles.menuButton}>
        <SvgIcon className={styles.menuIcon}>
          <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
        </SvgIcon>
      </IconButton>
      <Drawer
        open={isOpen}
        onClose={() => handleOpen(false)}
        classes={{ paper: props.classes.paperOverride }}
      >
        <div className={styles.sidebar}>
          <IconButton onClick={() => handleOpen(false)} className={styles.menuButton}>
            <SvgIcon className={styles.menuIcon}>
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
            </SvgIcon>
          </IconButton>
          <MyItem button className={styles.aboutTerraItem}>
            <Typography className={styles.aboutTerraText}>About Terra</Typography>
          </MyItem>
          <MyItem button className={styles.featuresItem}>
            <Typography className={styles.featuresText}>Features</Typography>
          </MyItem>
          <MyItem button className={styles.helpItem}>
            <Typography className={styles.helpText}>Help</Typography>
          </MyItem>
          <MyItem button className={styles.contactItem}>
            <Typography className={styles.contactText}>Contact Us</Typography>
          </MyItem>
        </div>
      </Drawer>
    </div>
  );
};

Sidebar.propTypes = {
  classes: PropTypes.func,
};

Sidebar.defaultProps = {
  classes: PropTypes.func,
};

export default withStyles(styling)(Sidebar);
