import { buildColorThemeObject } from "./functions/generalFunctions";

// Image Imports
import myImage from "./assets/myPictures/jonathanHome.jpg";

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

// Secrets
export const EMAILJS_SERVICE = process.env.REACT_APP_EMAILJS_SERVICE;
export const EMAILJS_TEMPLATE = process.env.REACT_APP_EMAILJS_TEMPLATE;
export const EMAILJS_PUBLIC = process.env.REACT_APP_EMAILJS_PUBLIC;

// Messages
export const LIGHT_ON_MESSAGE = 'It\'s too dark, turn on the lights!';
export const LIGHT_OFF_MESSAGE = 'It\'s too bright, turn off the lights!';

// Values
export const COLOR_OBJECT = 'colorObject';
export const LOCAL_STORAGE_COLOR_OBJECT = localStorage.getItem(COLOR_OBJECT)

export const DARK_THEME_COLOR_OBJECT = buildColorThemeObject(
  'dark', '#49585C', 'black', '#5F8575', '#C1E1C1', '#F3D6A5', darkModeFlashLight, LIGHT_ON_MESSAGE, logoDarkCircle, logoDarkSquare, logoDarkPlain
)

export const LIGHT_THEME_COLOR_OBJECT = buildColorThemeObject(
  'light', '#A5D3CC', '#FBFAF9', '#B9B1A9', '#E3CAC2', '#C8BFB5', lightModeFlashLight, LIGHT_OFF_MESSAGE, logoLightCircle, logoLightSquare, logoLightPlain
)

export const LOCAL_COLOR_OBJECT = LOCAL_STORAGE_COLOR_OBJECT || LIGHT_THEME_COLOR_OBJECT;


export const INTRO_ANIMATION_SHOULD_RUN = 'introAnimationShouldRun';
export const IS_TOGGLED_NAV_NAVBAR = 'isToggledNavBar';
export const IS_TOGGLED_OFF_NAV_NAVBAR = 'isToggledOffNavBar';

export const HOME_ADDRESS = '/';
export const ABOUT_ADDRESS = '/about';
export const CONTACT_ADDRESS = '/contact';

export const MY_IMAGE = myImage;
export const HOME = 'Home';
export const ABOUT = 'About';
export const CONTACT = 'Contact';

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


// libraries, frameworks, languages

export const HTML = 'HTML';
export const CSS = 'CSS';
export const JAVASCRIPT = 'JavaScript';
export const GIT = 'git';
export const GIT_HUB = 'GitHub';
export const REACT = 'React';
export const NODE_JS = 'Node.js';
export const EXPRESS = 'Express.js';
export const MONGO_DB = 'MongoDB';

export const LANGUAGE_ARRAY = [
  HTML, CSS, JAVASCRIPT, REACT, NODE_JS, EXPRESS, MONGO_DB, GIT, GIT_HUB
];

// Statements
export const HOME_PAGE_STATEMENT = 
  'Thank you for your interest in my work! I have experience building various kinds of websites with responsive design. I am open for freelance work and full-time employment';

export const ABOUT_PAGE_MESSAGE_ONE =
  <>
    I was born and raised in the San Francisco Bay Area and currently reside in Berkeley.
    <br/><br/>
    I started programming in 2020 when I decided to switch from a career in fine dining.
    <br/><br/>
    When I'm not coding, you can find me playing guitar or hanging out with my wife!
    <br/><br/>
    My programming related hobbies include stubbornly reading documentation and liking coding memes on LinkedIn.
  </>

export const ABOUT_PAGE_MESSAGE_TWO =
  <>
    LET'S MAKE
    <br/><br/>
    SOMETHING
    <br/><br/>
    SPECIAL
    <br/><br/>
    TOGETHER.
  </>