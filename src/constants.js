import { buildColorThemeObject } from "./functions/generalFunctions";

// Image Imports
import myImage from "./assets/myPictures/jonathan.jpeg";

// Icon Imports
import darkModeFlashLight from './assets/icons/darkModeFlashLight.png';
import lightModeFlashLight from './assets/icons/lightModeFlashLight.png';

// Logo Imports
import logoDarkCircle from './assets/logos/logoDarkCircle.png';
import logoDarkSquare from './assets/logos/logoDarkSquare.png';
import logoDarkPlain from './assets/logos/logoDarkPlain.png';
import logoLightCircle from './assets/logos/logoLightCircle.png';
import logoLightSquare from './assets/logos/logoLightSquare.png';
import logoLightPlain from './assets/logos/logoLightPlain.png';

// Messages
export const LIGHT_ON_MESSAGE = 'It\'s too dark, turn on the lights!';
export const LIGHT_OFF_MESSAGE = 'It\'s too bright, turn off the lights!';

// Values
export const COLOR_OBJECT = 'colorObject';
export const LOCAL_STORAGE_COLOR_OBJECT = localStorage.getItem(COLOR_OBJECT)

export const DARK_THEME_COLOR_OBJECT = buildColorThemeObject(
  'dark', '#764633', 'black', '#6f988a', '#585a50', '#1c1007', darkModeFlashLight, LIGHT_ON_MESSAGE, logoDarkCircle, logoDarkSquare, logoDarkPlain
)

export const LIGHT_THEME_COLOR_OBJECT = buildColorThemeObject(
  'light', '#B6CCC9', '#FBFAF9', '#FAC6B5', '#016855', '#70cb7eea', lightModeFlashLight, LIGHT_OFF_MESSAGE, logoLightCircle, logoLightSquare, logoLightPlain
)

export const LOCAL_COLOR_OBJECT = LOCAL_STORAGE_COLOR_OBJECT || LIGHT_THEME_COLOR_OBJECT;


export const INTRO_ANIMATION_SHOULD_RUN = 'introAnimationShouldRun';

export const HOME_ADDRESS = '/';
export const ABOUT_ADDRESS = '/about';

export const MY_IMAGE = myImage;
export const HOME = 'Home';
export const ABOUT = 'About';

export const FIRST_NAME = 'Jonathan';
export const LAST_NAME = 'Lascano';

export const SMALL = 'small';
export const MEDIUM = 'medium';
export const LARGE = 'large';

// ELEMENT TYPES

export const LINK = 'Link';
export const H1 = 'h1';
export const H2 = 'h2';
export const H3 = 'h3';
export const P = 'p';
export const DIV = 'div';


// libraries, framemworks, languages

export const HTML = 'HTML';
export const CSS = 'CSS';
export const JAVASCRIPT = 'JavaScript';
export const REACT = 'React';
export const NODE_JS = 'Node.js';
export const EXPRESS = 'Express.js';
export const MONGO_DB = 'MongoDB';

export const LANGUAGE_ARRAY = [
  HTML, CSS, JAVASCRIPT, REACT, NODE_JS, EXPRESS, MONGO_DB
];

// Statements
export const HOME_PAGE_STATEMENT = 
  "Thank you for your interest in my work! I have experience building various kinds of websites with responsive design. I am open for freelance work and full-time employment";