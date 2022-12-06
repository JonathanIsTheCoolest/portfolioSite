import React, { useState } from 'react';
import { ProviderContext } from '../../App';
import { 
  LIGHT_THEME_COLOR_OBJECT as LIGHT, 
  DARK_THEME_COLOR_OBJECT as DARK, 
  COLOR_OBJECT
} from '../../constants';
import styles from '../FlashLight/FlashLight.module.css';
import { getColorObject } from '../../apiCalls/getColorObject';
import { isMobile } from '../../functions/generalFunctions';

const FlashLight = () => {
  const {colorObject, setColorObject} = ProviderContext();
  const { name, flashLightIcon, message, colorTwo, colorFive } = colorObject;
  const [ isHovered, setIsHovered ] = useState(false);

  const onClick = () => {
    if (name === LIGHT.name) {
      localStorage.setItem(COLOR_OBJECT, JSON.stringify(DARK))
    } else {
      localStorage.setItem(COLOR_OBJECT, JSON.stringify(LIGHT))
    }
    setColorObject(getColorObject())
  };

  return (
    <>
      <div 
        className={styles.flashLight} 
        style={{ backgroundColor: 'transparent' }} 
      >
        <img 
          src={flashLightIcon} 
          alt="Flash Light" 
          onClick={onClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
          <div
           className={ 
            isHovered ? 
            isMobile ? styles.flashLightMessageNone : styles.flashLightMessageContainer :
            styles.flashLightMessageNone 
          }
          >
            <div 
              style={{ borderColor: 'transparent', color: colorTwo, backgroundColor: colorTwo }} 
              className={`${styles.flashLightMessage} ${styles.triRight} ${styles.bottomRightIn}`}
            >
              <div style={{  color: colorFive }}>
                {message}
              </div>
            </div>
          </div>
      </div>

    </>
  )
}

export default FlashLight;