import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './homepage.module.css';

const HomePage = () => (
  <Grid container spacing={24} className={styles.homepageContainer}>
    <div className={styles.headerDiv}>
      <div className={styles.textContainer}>
        <h1 className={styles.header}> About Me </h1>
        <div className={styles.content}>
          My name is Ben and I am a full stack devlooper. I am passionate about learning new
          technologies and software. Recently Ive became very interested in AWS. Actually, I created
          this website as a place to experiment with the many features of AWS and continue to grow
          as a developer.
        </div>
      </div>
    </div>
    <div className={styles.projectsDiv} />
  </Grid>
);
export default HomePage;
