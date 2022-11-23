import React from 'react';
import { Link } from 'react-router-dom';
import { ProviderContext } from '../../../App';

const StyledNavText = ({ props, isSelected, color, colorSelected }) => {
  const {type, text, className, route} = props;
  const { colorObject } = ProviderContext();
  const {colorTwo, colorThree} = colorObject;
  const textColor = (color) => {
    return !!color ?
    color :
    null;
  }
  const linkIsSelected = 
    isSelected === text ?
    {color: textColor(colorSelected) || colorThree} :
    {color: textColor(color) || colorTwo};
    
  return (
    <>
      {type === 'Link' ? <Link className={className} style={linkIsSelected} to={route}>{text.toUpperCase()}</Link> : null}
    </>
  )
}

export default StyledNavText;