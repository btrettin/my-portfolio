import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from '../../api/api';
import styles from './homepage.module.css';

const courseURL = 'http://localhost:5000/api/courses';
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: 'hey girl',
      api2Response: 'empty',
      postData: { name: 'Boston' },
    };
  }
  componentWillMount() {
    // this.getRemote();
    // this.getLocal();
  }
  getRemote(user) {
    axios
      .get(user)
      .then((res) => {
        this.setState({ apiResponse: JSON.stringify(res.data) });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getLocal(courseID) {
    axios
      .get(`${courseURL}/${courseID}`)
      .then((res) => {
        this.setState({ api2Response: JSON.stringify(res.data) });
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  deleteLocal = (courseID) => {
    axios
      .delete(`${courseURL}/${courseID}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  handleSubmit = (name, movie) => {
    const user = { favorite_movie: movie };
    axios
      .put(name, user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <Grid container spacing={24} className={styles.homepageContainer}>
        <div className={styles.headerDiv}>
          <div className={styles.textContainer}>
            <h1 className={styles.header}> Lawncare controlled at the comfort of your home </h1>
            <div className={styles.content}>
              <Button className={styles.startButton}>Get Started</Button>
            </div>
          </div>
        </div>
      </Grid>
    );
  }
}
export default HomePage;
