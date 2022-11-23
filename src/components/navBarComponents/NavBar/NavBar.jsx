import React, { useState } from 'react';
import { ProviderContext} from '../../../App';
import { buildTextPropsObject as buildProps } from '../../../functions/generalFunctions';
import { HOME_ADDRESS, ABOUT_ADDRESS, CONTACT_ADDRESS, HOME, ABOUT, CONTACT, IS_TOGGLED_NAV_NAVBAR, IS_TOGGLED_OFF_NAV_NAVBAR } from '../../../constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import StyledNavText from '../StyledNavText/StyledNavText';

import styles from '../NavBar/NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = ({ isSelected }) => {
  const [ isWindowTop, setIsWindowTop ] = useState(true);
  const {colorObject, setContextState, isToggledNavBar, isToggledOffNavBar, toggleOffNavBar} = ProviderContext();
  const {colorTwo, colorFour} = colorObject;

  const navBarObject = [
    { type: 'Link', text: HOME, className: styles.home, route: HOME_ADDRESS },
    { type: 'Link', text: ABOUT, className: styles.about, route: ABOUT_ADDRESS },
    { type: 'Link', text: CONTACT, className: styles.contact, route: CONTACT_ADDRESS },
  ];


  const toggleOn = () => {
    setContextState(IS_TOGGLED_OFF_NAV_NAVBAR, false);
    setContextState(IS_TOGGLED_NAV_NAVBAR, true);
  }

  const toggleNav = () => {
    isToggledNavBar ? 
    toggleOffNavBar() :
    toggleOn();
  };

  const navOptions =
  navBarObject.map((item, index) => (
    <div
      key={`${item.text}${index}`}
      onClick={toggleNav}
      className={styles.navOptions}
    >
      <StyledNavText 
        isSelected={isSelected}
        props={buildProps({type: item.type, text: item.text, className: item.className, route: item.route})}
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
  window.addEventListener('scroll', setNavbarColor);
  return (
    <div className={styles.navBar} style={{backgroundColor: isWindowTop ? 'transparent' : colorFour}}>
      <div onClick={toggleOffNavBar} className={styles.logoContainer}>
        <Link className={styles.logo} style={{ color: colorTwo }} to={HOME_ADDRESS}>
          JLR
        </Link>
      </div>
      <div className={`${styles.linkContainer} ${styles.doNotDisplay}`}>
        { navOptions }
      </div>
      <div className={styles.hamburgerMenuContainer}>
        <FontAwesomeIcon className={`${styles.hamburger} ${isToggledNavBar ? styles.hamburgerToggle : null}`} icon={faBars} onClick={toggleNav} style={{ color: colorTwo }}/>
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