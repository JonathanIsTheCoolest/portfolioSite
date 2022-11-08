import React, { useState } from 'react';
import { ProviderContext } from '../../App';
import LoadInAnimation from '../LoadInAnimation/LoadInAnimation';
import FlashLight from '../FlashLight/FlashLight';
import NavBar from '../NavBar/NavBar';
import ParallaxContainer from '../ParallaxContainer/ParallaxContainer';
import StyledText from '../StyledText/StyledText';
import { FIRST_NAME } from '../../constants';
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

  return (
    <div className="container" style={{backgroundColor: colorOne}}>
      {isLoadIn && introAnimationShouldRun ? <LoadInAnimation setIsLoadIn={setIsLoadIn}/> : null}
      <FlashLight/>
      <NavBar isSelected={isSelected}/>
      <ParallaxContainer style={{ color: colorTwo }} image={myPhoto} content={parallaxContent}/>
      <div>
        <StyledText props={buildProps('div', 'Let\'s say some more things here')}/>
      </div>
    </div>
  )
}

export default Home;