import React from "react";
import styles from "./welcome.module.css";

const Welcome = ({ message }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.welcomeMessage}>{message}</h1>
    </div>
  );
};

export default Welcome;
