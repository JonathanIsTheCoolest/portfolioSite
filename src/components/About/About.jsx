import React from 'react';
import { ProviderContext } from '../../App';
import FlashLight from '../FlashLight/FlashLight';
import NavBar from '../NavBar/NavBar';
import ParallaxContainer from '../ParallaxContainer/ParallaxContainer';
import ScrollingAnimations from '../ScrollingAnimations/ScrollingAnimations';
import { ABOUT_PAGE_MESSAGE_ONE, ABOUT_PAGE_MESSAGE_TWO } from '../../constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

import styles from './About.module.css';

import myPhoto from '../../assets/myPictures/jonathanAbout.png';

const About = ({ isSelected }) => {
  const { colorObject, toggleOffNavBar, isToggledNavBar, isToggledOffNavBar } = ProviderContext();
  const { colorOne, colorTwo, colorThree } = colorObject;

  const inlineFloatingBoxStyles = {
    backgroundColor: 'transparent',
    borderColor: colorTwo,
    color: colorTwo,
  }
  
  const inlineFlexItemStyles = {
    backgroundColor: colorThree,
    borderColor: 'transparent',
    color: colorTwo,
  }
  
  const leftAbsoluteClasses = [
    styles.topLeftBox, styles.bottomRightBox
  ]
  
  const makeBoxDiv = (key, classes) => {
    return <div key={key} style={inlineFloatingBoxStyles} className={classes}></div>
  }

  const flexItemOne = 
    <div style={inlineFlexItemStyles} className={`flexItems ${styles.flexMessageOne}`}>
      {ABOUT_PAGE_MESSAGE_ONE}
      {
        leftAbsoluteClasses.map((item, index) => (
          makeBoxDiv((`${item.replace('styles.', '')}${index}`), item)
        ))
      }
    </div>;

  const flexItemTwo = 
    <div style={{ color: colorTwo }} className={`flexItems ${styles.flexMessageTwoAndThree} ${styles.flexMessageTwo}`}>
      <a href="https://github.com/JonathanIsTheCoolest">
        <FontAwesomeIcon icon={faGithubAlt} style={{ color: colorTwo }}/>
      </a>
      <a href="https://www.linkedin.com/in/jonathan-lascano-benham-214ba0177/">
        <FontAwesomeIcon icon={faLinkedin} style={{ color: colorTwo }}/>      
      </a>
      <a href="https://medium.com/@jonathanlascanobenham">
        <FontAwesomeIcon icon={faMedium} style={{ color: colorTwo }}/>
      </a>
    </div>;

  const flexItemThree = 
    <div style={{ color: colorTwo }} className={`flexItems ${styles.flexMessageThree} ${styles.flexMessageTwoAndThree}`}>
      {ABOUT_PAGE_MESSAGE_TWO}
    </div>;

  const flexChildrenArray = [
    { name: 'flexItemOne', element: flexItemOne, classes: styles.gridOne },
    { name: 'flexItemTwo', element: flexItemTwo, classes: styles.gridTwo },
    { name: 'flexItemThree', element: flexItemThree, classes: styles.gridThree },
  ];
  return (
    <div className={`container ${styles.aboutContainer}`} style={{backgroundColor: colorOne}} onClick={isToggledNavBar && !isToggledOffNavBar ? toggleOffNavBar : null}>
      <FlashLight/>
      <NavBar isSelected={isSelected}/>
      <ParallaxContainer image={myPhoto}/>
      <section className={`lowerContentContainer ${styles.gridContainer}`}>
      {
          flexChildrenArray.map((item, index) => (
            <ScrollingAnimations
              key={`${item.name}${index}`}
              element={item.element}
              index={index}
              classes={item.classes}
            />
          ))
        }
      </section>
    </div>
  )
}

export default About;