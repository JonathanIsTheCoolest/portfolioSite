import { LIGHT_THEME_COLOR_OBJECT, COLOR_OBJECT } from "../constants";

export const getColorObject = () => {
  try {
    const colorObject = localStorage.getItem(COLOR_OBJECT);
    return colorObject ? JSON.parse(colorObject) : LIGHT_THEME_COLOR_OBJECT;
  } catch (error) {
    console.error(`Something went wrong: ${error}`);
    return LIGHT_THEME_COLOR_OBJECT;
  }
};
