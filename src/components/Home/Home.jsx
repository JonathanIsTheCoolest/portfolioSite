import React, { useState } from 'react';
import { ProviderContext } from '../../App';
import LoadInAnimation from '../LoadInAnimation/LoadInAnimation';
import FlashLight from '../FlashLight/FlashLight';
import NavBar from '../NavBar/NavBar';
import ParallaxContainer from '../ParallaxContainer/ParallaxContainer';
import StyledText from '../StyledText/StyledText';
import { FIRST_NAME, LANGUAGE_ARRAY, HOME_PAGE_STATEMENT } from '../../constants';
import { buildTextPropsObject as buildProps } from '../../functions/generalFunctions';

import myPhoto from '../../assets/myPictures/jonathan.jpeg';

import styles from '../Home/Home.module.css'

const Home = ({ isSelected }) => {
  const {introAnimationShouldRun, colorObject} = ProviderContext();
  const {colorOne, colorTwo} = colorObject;

  const [isLoadIn, setIsLoadIn] = useState(true);

  const parallaxContent = 
    <div>
      <div className={styles.parallaxMessageContainer}>
        <StyledText props={buildProps('div', 'Hello,')}/>
        <StyledText props={buildProps('div', `I'm ${FIRST_NAME}`)}/>
      </div>
      <StyledText props={buildProps('h1', 'WEB DEVELOPER')}/>
      <StyledText props={buildProps('h2', 'specialized in React')}/>
    </div>

  const inlineFlexItemStyles = {
    boxShadow: `0 0 var(--size-ten) ${colorTwo}`,
    color: colorTwo,
  }

  const leftAbsoluteClasses = [
    styles.topLeftBox, styles.bottomLeftBox, styles.bottomRightBox
  ]

  const rightAbsoluteClasses = [
    styles.topLeftBox, styles.bottomRightBox, styles.topRightBox
  ]

  const makeBoxDiv = (key, classes) => {
    return <div key={key} style={inlineFlexItemStyles} className={classes}></div>
  }

  return (
    <div className="container" style={{backgroundColor: colorOne}}>
      {isLoadIn && introAnimationShouldRun ? <LoadInAnimation setIsLoadIn={setIsLoadIn}/> : null}
      <FlashLight/>
      <NavBar isSelected={isSelected}/>
      <ParallaxContainer style={{ color: colorTwo }} image={myPhoto} content={parallaxContent}/>
      <section className={styles.homeContentContainer}>
        <div style={inlineFlexItemStyles} className={`${styles.resumeContainer} ${styles.homeFlexItems}`}>
          <div>
            {HOME_PAGE_STATEMENT} 
          </div>
          <input style={inlineFlexItemStyles} type="button" value="DOWNLOAD_RESUME"/>
          {
            leftAbsoluteClasses.map((item, index) => (
              makeBoxDiv((`${item.replace('styles.', '')}${index}`), item)
            ))
          }
        </div>
        <div style={inlineFlexItemStyles} className={`${styles.languageContainer} ${styles.homeFlexItems}`}>
          {
            LANGUAGE_ARRAY.map((item, index) => (
              <div key={`${item.replace('.', '')}${index}`}>{item}</div>
            ))
          }
          {
            rightAbsoluteClasses.map((item, index) => (
              makeBoxDiv((`${item.replace('styles.', '')}${index}`), item)
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Home;