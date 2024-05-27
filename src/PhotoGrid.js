// src/components/PhotoGrid.js
import React from 'react';
import PhotoCard from './PhotoCard';
import styles from './PhotoGrid.css';

const PhotoGrid = ({ images }) => {
  return (
    <div className={styles.grid}>
      {images.map((image, index) => (
        <PhotoCard key={index} image={image} index={index} />
      ))}
    </div>
  );
};

export default PhotoGrid;
