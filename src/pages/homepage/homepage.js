import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './homepage.module.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: 'hello' };
  }
  componentWillMount() {
    this.callAPI();
  }
  callAPI() {
    fetch('https://qew2e14k40.execute-api.us-east-1.amazonaws.com/Deployment/Ben')
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }
  render() {
    return (
      <Grid container spacing={24} className={styles.homepageContainer}>
        <div className={styles.headerDiv}>
          <div className={styles.textContainer}>
            <h1 className={styles.header}> About Me </h1>
            <div className={styles.content}>
              <p>{this.state.apiResponse}</p>
            </div>
          </div>
        </div>
        <div className={styles.projectsDiv} />
      </Grid>
    );
  }
}
export default HomePage;
