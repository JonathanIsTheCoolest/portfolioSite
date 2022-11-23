export const buildColorThemeObject = ({
  name,
  colorOne,
  colorTwo,
  colorThree,
  colorFour,
  colorFive,
  flashLightIcon,
  message,
}) => {
  const colorObject = {
    name,
    colorOne,
    colorTwo,
    colorThree,
    colorFour,
    colorFive,
    flashLightIcon: flashLightIcon,
    message: message,
  };
  return colorObject;
};

// Styled Nav Text Props
export const buildTextPropsObject = ({ type, text, className, route }) => {
  const textPropsObject = {
    type,
    text,
    className,
    route,
  };
  return textPropsObject;
};
