import React from 'react';
import FlashLight from '../FlashLight/FlashLight';
import NavBar from '../NavBar/NavBar';
import ParallaxContainer from '../ParallaxContainer/ParallaxContainer';

import myPhoto from '../../assets/myPictures/jonathanContact.png';

const Contact = ({ isSelected }) => {
  return (
    <div>
      <FlashLight/>
      <NavBar isSelected={isSelected}/>
      <ParallaxContainer image={myPhoto}/>
    </div>
  )
}

export default Contact;