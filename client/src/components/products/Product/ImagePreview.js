import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './ImagePreview.module.css';

const ImagePreview = () => {
  const { imagePath } = useParams();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.fullscreen}>
      <div className={styles.imageContainer}>
        <img
          src={imagePath}
          className={styles.image}
          onClick={handleClick}
        />
      </div>
      <button className={styles.closeButton} onClick={handleClick}>
        x
      </button>
    </div>
  );
};

export default ImagePreview;
