import React, { useState, useEffect } from 'react';
import { ProviderContext} from '../../../App';
import { buildTextPropsObject as buildProps } from '../../../functions/generalFunctions';
import { HOME_ADDRESS, ABOUT_ADDRESS, CONTACT_ADDRESS, HOME, ABOUT, CONTACT } from '../../../constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import StyledNavText from '../StyledNavText/StyledNavText';

import styles from '../NavBar/NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [ isWindowTop, setIsWindowTop ] = useState(true);
  const {colorObject, setIsToggledNavBar, setIsToggledOffNavBar, isToggledNavBar, isToggledOffNavBar, toggleOffNavBar, navSelected} = ProviderContext();
  const {colorTwo, colorFour} = colorObject;

  const navBarObject = [
    { type: 'Link', text: HOME, className: styles.home, route: HOME_ADDRESS },
    { type: 'Link', text: ABOUT, className: styles.about, route: ABOUT_ADDRESS },
    { type: 'Link', text: CONTACT, className: styles.contact, route: CONTACT_ADDRESS },
  ];

  useEffect(() => {
    window.addEventListener('load', setNavbarColor());
    return window.removeEventListener('load', setNavbarColor());
  }, [])


  const toggleOn = () => {
    setIsToggledOffNavBar(false);
    setIsToggledNavBar(true);
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
        isSelected={navSelected}
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
        <Link className={`${styles.logo} ${!isWindowTop ? styles.flipLogo : null}`} style={{ color: colorTwo }} to={HOME_ADDRESS}>
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