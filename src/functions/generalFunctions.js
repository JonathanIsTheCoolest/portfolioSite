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

// Make name to title
export const makeNameIntoTitle = (name) => {
  const titleName = name[0]
    .toUpperCase()
    .concat(name.slice(1, name.length))
    .replace(/([A-Z])/g, " $1")
    .trim();
  return titleName;
};

// Check media type
export const isMobile =
  /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
