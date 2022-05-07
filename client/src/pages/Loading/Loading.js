import React from 'react';
import loadingIcon from '../../assets/loadingIcon.gif';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loadingPage}>
      <img className={styles.loadingIcon} src={loadingIcon} alt='Loading...' />
    </div>
  );
};

export default Loading;
