import React from 'react';
import styles from './ImagePreview.module.css';

const ImagePreview = ({ image, setShowImage }) => {
  return (
    <div className={styles.fullscreen}>
      <div className={styles.imageContainer}>
        <button className={styles.closeButton} onClick={() => setShowImage(false)}>
          x
        </button>
        <img
          src={`/uploads/${image}`}
          className={styles.image}
          onClick={() => setShowImage(false)}
        />
      </div>
    </div>
  );
};

export default ImagePreview;
