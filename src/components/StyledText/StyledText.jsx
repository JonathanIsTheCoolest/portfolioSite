import React from 'react';
import { Link } from 'react-router-dom';
import { ProviderContext } from '../../App';

const StyledText = ({ props, isSelected, color, colorSelected }) => {
  const {type, text, className, route} = props;
  const { colorObject } = ProviderContext();
  const {colorTwo, colorThree, colorFour} = colorObject;
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
      {type === 'h1' ? <h1 className={className} style={{color: textColor(color) || colorTwo}} >{text}</h1> : null}
      {type === 'h2' ? <h2 className={className} style={{color: textColor(color) || colorTwo}} >{text}</h2> : null}
      {type === 'h3' ? <h3 className={className} style={{color: textColor(color) || colorThree}} >{text}</h3> : null}
      {type === 'p' ? <p className={className} style={{color: textColor(color) || colorFour}} >{text}</p> : null}
      {type === 'div' ? <div className={className} style={{color: textColor(color) || colorTwo}} >{text}</div> : null}
    </>
  )
}

export default StyledText;