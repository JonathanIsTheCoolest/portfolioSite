import React from 'react';
import { ProviderContext } from '../../App';
import {
   INTRO_ANIMATION_SHOULD_RUN as SHOULD_RUN,
   HTML, CSS, JAVASCRIPT, REACT, NODE_JS, EXPRESS, MONGO_DB
} from '../../constants';

import styles from "../LoadInAnimation/LoadInAnimation.module.css";

const languageList = [
  {language: HTML, class: styles.html},
  {language: CSS, class: styles.css},
  {language: JAVASCRIPT, class: styles.javaScript},
  {language: REACT, class: styles.react},
  {language: NODE_JS, class: styles.nodeJS},
  {language: EXPRESS, class: styles.express},
  {language: MONGO_DB, class: styles.mongoDB}
];

const LoadInAnimation = ({ setIsLoadIn }) => {
  const {colorObject, setContextState} = ProviderContext();
  const {colorOne, colorTwo} = colorObject;

  const endAnimation = () => {
    setTimeout(
      setIsLoadIn(false), 
      setContextState(SHOULD_RUN, false)
    , 1000)
  }

  
  return (
    <div className={styles.loadInContainer} style={{backgroundColor: colorOne}}>
      <div className={styles.designBox} onAnimationEnd={endAnimation} style={{color: colorTwo, borderColor: colorTwo}}>
        <h1>JLR</h1>
          {
            languageList.map((item, index) => (
              <div key={`${item.language.replace('.', '')}${index}`} className={item.class} style={{backgroundColor: colorOne}}>
                {item.language}
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default LoadInAnimation;