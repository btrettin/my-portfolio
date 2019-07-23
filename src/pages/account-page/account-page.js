import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import UserMenu from './user-menu';
import Lbj from './steph.webp';
import ProfileForm from './forms/profile-form';
import PaymentsForm from './forms/payments-form';
import NotiForm from './forms/noti-form';
import MyRequestsForm from './forms/my-requests-form';
import PrivacyForm from './forms/privacy-form';
import styles from './account-page.module.css';

const AccountPage = () => {
  const [form, setForm] = useState('Edit Profile');
  const pickForm = (value) => {
    const myValue = value.form;
    switch (myValue) {
      case 'Edit Profile':
        return <ProfileForm />;
      case 'Payment Methods':
        return <PaymentsForm />;
      case 'Notifications':
        return <NotiForm />;
      case 'My Requests':
        return <MyRequestsForm />;
      case 'Privacy':
        return <PrivacyForm />;
      default:
        return null;
    }
  };
  return (
    <Grid container className={styles.container}>
      <Grid item xl={11} lg={11} md={11} sm={11} xs={11} className={styles.gridItem}>
        <div className={styles.upperDiv}>
          <div className={styles.userImageDiv}>
            <Avatar className={styles.imageIcon} alt="Remy Sharp" src={Lbj} />
            <h1 className={styles.userHeader}>Stephen Curry </h1>
          </div>
        </div>
        <div className={styles.lowerDiv}>
          <div className={styles.leftDiv}>
            <div className={styles.tabsDiv}>
              <UserMenu setForm={setForm} />
            </div>
          </div>
          <div className={styles.contentDiv}>
            <h1>{form}</h1>
            {pickForm({ form })}
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
export default AccountPage;
