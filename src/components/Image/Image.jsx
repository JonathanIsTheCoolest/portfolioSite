import { useState } from "react";

import styles from './Image.module.css';

const Image = ({
  src, 
  alt
}) => {
  const [ isImageLoaded, setIsImageLoaded ] = useState(false);
  return (
    <div
      className={styles.imageContainer}
    >
      {
        src ?
          <img 
            src={src} 
            alt={alt}
            onLoad={() => setIsImageLoaded(true)}
            className={styles.image}
          /> :
          null
        }
      <div
        className={styles.imagePlaceholder}
        style={{
          display: !isImageLoaded ? 'block' : 'none',
        }}
      >
        <div className={styles.imagePlaceholderBar}></div>
      </div>
    </div>
  )
}

export default Image;