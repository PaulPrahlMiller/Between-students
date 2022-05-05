import React from 'react';
import useAlert from '../../../hooks/useAlert';
import styles from './Alert.module.css';

const Alert = () => {
  const alertState = useAlert()[0];

  const { alert } = alertState;

  return (
    <div className={styles.alertContainer}>
      {alert && <div className={styles[alert.type]}>{alert.message}</div>}
    </div>
  );
};

export default Alert;
