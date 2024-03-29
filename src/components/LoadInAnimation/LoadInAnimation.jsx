import React from 'react';
import { ProviderContext } from '../../App';
import {
   HTML, CSS, JAVASCRIPT, REACT, NODE_JS, EXPRESS, MONGO_DB, TYPESCRIPT, PYTHON, REACT_NATIVE
} from '../../constants';

import styles from "../LoadInAnimation/LoadInAnimation.module.css";

const languageList = [
  {language: HTML, class: styles.html},
  {language: CSS, class: styles.css},
  {language: JAVASCRIPT, class: styles.javaScript},
  {language: TYPESCRIPT, class: styles.typeScript},
  {language: PYTHON, class: styles.python},
  {language: REACT, class: styles.react},
  {language: REACT_NATIVE, class: styles.reactNative},
  {language: NODE_JS, class: styles.nodeJS},
  {language: EXPRESS, class: styles.express},
  {language: MONGO_DB, class: styles.mongoDB}
];

const LoadInAnimation = () => {
  const {colorObject, setIntroAnimationShouldRun} = ProviderContext();
  const {colorOne, colorTwo} = colorObject;

  const endAnimation = () => {
    setTimeout(
      setIntroAnimationShouldRun(false)
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