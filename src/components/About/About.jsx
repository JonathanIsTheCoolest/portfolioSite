import React from 'react';
import FlashLight from '../FlashLight/FlashLight';
import NavBar from '../NavBar/NavBar';
import ParallaxContainer from '../ParallaxContainer/ParallaxContainer';

import myPhoto from '../../assets/myPictures/jonathanAbout.png';

const About = ({ isSelected }) => {
  return (
    <div>
      <FlashLight/>
      <NavBar isSelected={isSelected}/>
      <ParallaxContainer image={myPhoto}/>
    </div>
  )
}

export default About;