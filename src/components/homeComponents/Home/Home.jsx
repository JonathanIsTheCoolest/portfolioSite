import React, { useEffect, useRef } from 'react';
import { ProviderContext } from '../../../App';
import LoadInAnimation from '../../LoadInAnimation/LoadInAnimation';
import FlashLight from '../../FlashLight/FlashLight';
import NavBar from '../../navBarComponents/NavBar/NavBar';
import ParallaxContainer from '../../ParallaxContainer/ParallaxContainer';
import { FIRST_NAME, HOME_PAGE_STATEMENT, LANGUAGE_ARRAY } from '../../../constants';

import TagCloud from 'TagCloud';

import ScrollingAnimations from '../../ScrollingAnimations/ScrollingAnimations';

import myPhoto from '../../../assets/myPictures/jonathanHome.jpg';

import styles from '../Home/Home.module.css';

const Home = ({ isSelected }) => {
  const {introAnimationShouldRun, colorObject, toggleOffNavBar, isToggledNavBar, isToggledOffNavBar} = ProviderContext();
  const {colorOne, colorTwo, colorThree, colorFour} = colorObject;

  let ignore = useRef(false);

  let windowPxAdd = window.innerWidth / 25;

  useEffect (() => {
    let tagConstraints = {
      radius: 100 + windowPxAdd,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      direction: 135,
      keep: true
    }
    
    if (!ignore.current) {
      TagCloud('.tagCloudContent', LANGUAGE_ARRAY, tagConstraints);
    }
    return () => ignore.current = true;
  }, [windowPxAdd])

  const parallaxContent = 
    <div className={styles.parallaxMessageContainer} style={{ color: colorTwo }}>
      <div className={styles.parallaxLargeTextContainer}>
        <div>Hello</div>
        <div>I'm {FIRST_NAME}</div>
      </div>
      <h1>WEB DEVELOPER</h1>
      <h2>specialized in React</h2>
    </div>

  // Bottom Flex Container

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
    styles.topLeftBoxOne, styles.topLeftBoxTwo,
    styles.bottomRightBoxOne, styles.bottomRightBoxTwo
  ]

  const rightAbsoluteClasses = [
    styles.topLeftBoxOne, styles.topLeftBoxTwo,
    styles.bottomRightBoxOne, styles.bottomRightBoxTwo
  ]

  const makeBoxDiv = (key, classes) => {
  return <div key={key} style={inlineFloatingBoxStyles} className={classes}></div>
}

  const flexItemOne = 
    <div style={inlineFlexItemStyles} className={`${styles.resumeContainer} flexItems`}>
      <div>
        {HOME_PAGE_STATEMENT} 
      </div>
      <input style={{ color: colorTwo, backgroundColor: colorFour }} type="button" value="<DownloadResume/>"/>
      {
        leftAbsoluteClasses.map((item, index) => (
          makeBoxDiv((`${item.replace('styles.', '')}${index}`), item)
        ))
      }
    </div>;
  
  const flexItemTwo = 
    <div style={inlineFlexItemStyles} className={`${styles.languageContainer} flexItems`}>
      {
        rightAbsoluteClasses.map((item, index) => (
          makeBoxDiv((`${item.replace('styles.', '')}${index}`), item)
        ))
      }
      <div className="tagCloudContent"></div>
    </div>;

  const flexChildrenArray = [
    { name: 'flexItemOne', element: flexItemOne },
    { name: 'flexItemTwo', element: flexItemTwo },
  ];

  return (
    <div className="container" style={{backgroundColor: colorOne}} onClick={isToggledNavBar && !isToggledOffNavBar ? toggleOffNavBar : null}>
      {introAnimationShouldRun ? <LoadInAnimation/> : null}
      <FlashLight/>
      <NavBar isSelected={isSelected}/>
      <ParallaxContainer style={{ color: colorTwo }} image={myPhoto} content={parallaxContent}/>
      <section className={`lowerContentContainer`}>
        {
          flexChildrenArray.map((item, index) => (
            <ScrollingAnimations
              key={`${item.name}${index}`}
              element={item.element}
              index={index}
            />
          ))
        }
      </section>
    </div>
  )
}

export default Home;