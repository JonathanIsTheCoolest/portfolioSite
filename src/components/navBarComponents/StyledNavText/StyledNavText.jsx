import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProviderContext } from '../../../App';

const StyledNavText = ({ props, isSelected, color, colorSelected }) => {
  const [isHovered, setIsHovered] = useState(false);
  const {type, text, className, route} = props;
  const { colorObject } = ProviderContext();
  const {colorTwo, colorThree} = colorObject;

  const textColor = (color) => {
    return !!color ?
    color :
    null;
  }

  const linkIsSelected = 
    isHovered ?
    {color: colorThree} :
    isSelected === text ?
    {color: textColor(colorSelected) || colorThree} :
    {color: textColor(color) || colorTwo};
  return (
    <>
      {
        type === 'Link' ? 
        <Link 
          className={className} 
          style={linkIsSelected} 
          to={route}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {text.toUpperCase()}
        </Link> : 
        null
      }
    </>
  )
}

export default StyledNavText;