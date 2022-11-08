export const buildColorThemeObject = (name, cOne, cTwo, cThree, cFour, cFive, flashLightIcon, message, logoCircle, logoSquare, logoPlain) => {
  const colorObject = {
    name: name,
    colorOne: cOne,
    colorTwo: cTwo,
    colorThree: cThree,
    colorFour: cFour,
    colorFive: cFive,
    flashLightIcon: flashLightIcon,
    message: message,
    logoCircle: logoCircle,
    logoSquare: logoSquare,
    logoPlain: logoPlain
  }
  return colorObject;
}

export const buildTextPropsObject = (type, text, className, route) => {
  const textPropsObject = {
    type: type,
    text: text,
    className: className,
    route: route,
  }
  return textPropsObject;
}