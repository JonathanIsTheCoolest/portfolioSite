import React, { useState, useEffect, useRef } from 'react';

import styles from './ScrollingAnimations.module.css';

function ScrollingAnimations({ element, index }) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    const current = domRef.current;
    observer.observe(current);
    return () => observer.disconnect(current);
  }, []);
  return (
    <div
      className={`${ styles.fadeInBottom} ${isVisible ? styles.isVisible : ''}`}
      ref={domRef}
    >
      {element}
    </div>
  );
}

export default ScrollingAnimations;