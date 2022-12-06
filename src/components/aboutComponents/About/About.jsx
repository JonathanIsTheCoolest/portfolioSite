import React, { useEffect } from 'react';
import { ProviderContext } from '../../../App';
import ParallaxContainer from '../../ParallaxContainer/ParallaxContainer';
import ScrollingAnimations from '../../ScrollingAnimations/ScrollingAnimations';
import LoadInAnimation from '../../LoadInAnimation/LoadInAnimation';
import ExternalLinks from '../../ExternalLinks/ExternalLinks';
import { ABOUT_PAGE_MESSAGE_ONE, ABOUT_PAGE_MESSAGE_TWO, ABOUT } from '../../../constants';

import styles from './About.module.css';

import myPhoto from '../../../assets/myPictures/jonathanAbout.png';

const About = () => {
  const { colorObject, toggleOffNavBar, introAnimationShouldRun, setNavSelected } = ProviderContext();
  const { colorOne, colorTwo, colorThree } = colorObject;

  useEffect(() => {
    setNavSelected(ABOUT)
  }, [setNavSelected])

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
      <ExternalLinks/>
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
    <div className={`container ${styles.aboutContainer}`} style={{backgroundColor: colorOne}} onClick={toggleOffNavBar}>
      {introAnimationShouldRun ? <LoadInAnimation/> : null}
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