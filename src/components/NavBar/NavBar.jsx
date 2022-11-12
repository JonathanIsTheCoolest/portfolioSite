import React, { useState } from 'react';
import { ProviderContext} from '../../App';
import { buildTextPropsObject as buildProps } from '../../functions/generalFunctions';
import { HOME_ADDRESS, ABOUT_ADDRESS, CONTACT_ADDRESS, HOME, ABOUT, LINK, CONTACT, IS_TOGGLED_NAV_NAVBAR, IS_TOGGLED_OFF_NAV_NAVBAR } from '../../constants';

import StyledText from '../StyledText/StyledText';

import styles from '../NavBar/NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = ({ isSelected }) => {
  const [ isWindowTop, setIsWindowTop ] = useState(true);
  const {colorObject, setContextState, isToggledNavBar, isToggledOffNavBar} = ProviderContext();
  const {colorTwo, colorFour} = colorObject;

  const navBarObject = [
    { type: LINK, text: HOME, className: undefined, route: HOME_ADDRESS },
    { type: LINK, text: ABOUT, className: undefined, route: ABOUT_ADDRESS },
    { type: LINK, text: CONTACT, className: styles.contact, route: CONTACT_ADDRESS },
  ];


  const toggleOn = () => {
    setContextState(IS_TOGGLED_OFF_NAV_NAVBAR, false);
    setContextState(IS_TOGGLED_NAV_NAVBAR, true);
  }

  const toggleOff = () => {
    const toggle = () => {
      setContextState(IS_TOGGLED_NAV_NAVBAR, false);
      setContextState(IS_TOGGLED_OFF_NAV_NAVBAR, false);
    }
    setContextState(IS_TOGGLED_OFF_NAV_NAVBAR, true);
    setTimeout(() => 
        !isToggledOffNavBar ? toggle() : null
      , 1000);
  }

  const toggleNav = () => {
    isToggledNavBar ? 
    toggleOff() :
    toggleOn();
  };

  const navOptions =
  navBarObject.map((item, index) => (
    <div
      key={`${item.text}${index}`}
      onClick={toggleNav}
    >
      <StyledText 
        isSelected={isSelected}
        props={buildProps(item.type, item.text, item.className, item.route)}
      />
    </div>
  ));

  const setNavbarColor = () => {
    const height = window.scrollY;
    if (height >= 50) {
      setIsWindowTop(false);
    } else {
      setIsWindowTop(true);
    }
  }
  window.addEventListener('scroll', setNavbarColor)
  return (
    <div className={styles.navBar} style={{backgroundColor: isWindowTop ? 'transparent' : colorFour}}>
      <div onClick={toggleOff} className={styles.logoContainer}>
        <Link className={styles.logo} style={{ color: colorTwo }} to={HOME_ADDRESS}>
          JLR
        </Link>
      </div>
      <div className={`${styles.linkContainer} ${styles.doNotDisplay}`}>
        { navOptions }
      </div>
      <div className={styles.hamburgerMenuContainer}>
        <img onClick={toggleNav} src="" alt="BURGER" />
        <div 
          style={{ backgroundColor: colorFour }} 
          className={`
            ${isToggledNavBar ? styles.display : styles.doNotDisplay}
            ${isToggledOffNavBar ? styles.toggleOff : null}  
          `}
        >
          { navOptions }
        </div>
      </div>
    </div>
  )
}

export default NavBar;