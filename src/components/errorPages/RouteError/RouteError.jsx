import React from 'react';
import { Link } from 'react-router-dom';
import { ProviderContext } from '../../../App';
import ParallaxContainer from '../../ParallaxContainer/ParallaxContainer';

const RouteError = () => {
  const { colorObject, toggleOffNavBar } = ProviderContext();
  const { colorTwo, colorFour } = colorObject;
  const parallaxContent = 
    <h1 style={{ color: colorTwo }}>
      Sorry this page does not exist
      <br /><br />
      <Link to="/" style={{ color: colorFour }}>Go Back To Home</Link>
    </h1>
  return (
    <div onClick={toggleOffNavBar}>
      <ParallaxContainer content={parallaxContent}/>
    </div>
  )
}

export default RouteError;