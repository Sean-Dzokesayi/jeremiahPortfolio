// src/components/PhotoCard.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './PhotoCard.css';

const PhotoCard = ({ image, index }) => {
  const props = useSpring({
    to: { transform: 'translateY(0)' },
    from: { transform: `translateY(${index * 20}px)` },
    delay: index * 100,
  });

  return (
    <animated.div className={styles.card} style={props}>
      <img src={image} alt="Art Photography" className={styles.image} />
    </animated.div>
  );
};

export default PhotoCard;
