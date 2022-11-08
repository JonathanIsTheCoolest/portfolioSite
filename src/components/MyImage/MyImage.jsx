import React from 'react';
import { MY_IMAGE, MEDIUM, LARGE } from '../../constants';

import styles from '../MyImage/MyImage.module.css';

const MyImage = ({ imgSize }) => {
  const imageClassSizeTernary = 
    imgSize === LARGE ?
    styles.largeImageContainer :
    imgSize === MEDIUM ?
    styles.mediumImageContainer :
    styles.smallImageContainer
  ;
  return (
    <div className={`${styles.myImageContainer} ${imageClassSizeTernary}`}>
      <img className={styles.myImage} src={MY_IMAGE} alt="Nice photograph of myself" />
    </div>
  )
}

export default MyImage;