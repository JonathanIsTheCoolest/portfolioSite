import React, { useState } from 'react';
import { ProviderContext } from '../../App';
import { 
  LIGHT_THEME_COLOR_OBJECT as LIGHT, 
  DARK_THEME_COLOR_OBJECT as DARK, 
  COLOR_OBJECT
} from '../../constants';
import styles from '../FlashLight/FlashLight.module.css';

const FlashLight = () => {
  const {colorObject, setContextState} = ProviderContext();
  const { name, flashLightIcon, message } = colorObject;
  const [ isHovered, setIsHovered ] = useState(false);

  const onClick = () => {
    if (name === LIGHT.name) {
      localStorage.setItem(COLOR_OBJECT, JSON.stringify(DARK))
    } else {
      localStorage.setItem(COLOR_OBJECT, JSON.stringify(LIGHT))
    }
    setContextState(
      COLOR_OBJECT, 
      name === LIGHT.name ? DARK : LIGHT
    );
  };

  return (
    <>
      <div 
        className={styles.flashLight} 
        style={{ backgroundColor: 'transparent' }} 
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={flashLightIcon} alt="Flash Light" />
        {/* {
          isHovered ?
          <div className={styles.flashLightMessage}>
            {message}
          </div> :
          null
        } */}
        {/* <div className={styles.flashLightMessage}>
            {message}
        </div> */}
      </div>

    </>
  )
}

export default FlashLight;