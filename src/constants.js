import { buildColorThemeObject } from "./functions/generalFunctions";

// Icon Imports
import darkModeFlashLight from "./assets/icons/darkModeFlashLight.png";
import lightModeFlashLight from "./assets/icons/lightModeFlashLight.png";

// Secrets
export const EMAILJS_SERVICE = process.env.REACT_APP_EMAILJS_SERVICE;
export const EMAILJS_TEMPLATE = process.env.REACT_APP_EMAILJS_TEMPLATE;
export const EMAILJS_PUBLIC = process.env.REACT_APP_EMAILJS_PUBLIC;

// Messages
export const LIGHT_ON_MESSAGE = "It's too dark, turn on the lights!";
export const LIGHT_OFF_MESSAGE = "It's too bright, turn off the lights!";

// Values
export const COLOR_OBJECT = "colorObject";

export const DARK_THEME_COLOR_OBJECT = buildColorThemeObject({
  name: "dark",
  colorOne: "#49585C",
  colorTwo: "black",
  colorThree: "#5F8575",
  colorFour: "#C1E1C1",
  colorFive: "#F3D6A5",
  flashLightIcon: darkModeFlashLight,
  message: LIGHT_ON_MESSAGE,
});

export const LIGHT_THEME_COLOR_OBJECT = buildColorThemeObject({
  name: "light",
  colorOne: "#A5D3CC",
  colorTwo: "#FBFAF9",
  colorThree: "#B9B1A9",
  colorFour: "#E3CAC2",
  colorFive: "#C8BFB5",
  flashLightIcon: lightModeFlashLight,
  message: LIGHT_OFF_MESSAGE,
});

export const INTRO_ANIMATION_SHOULD_RUN = "introAnimationShouldRun";
export const IS_TOGGLED_NAV_NAVBAR = "isToggledNavBar";
export const IS_TOGGLED_OFF_NAV_NAVBAR = "isToggledOffNavBar";

export const HOME_ADDRESS = "/";
export const ABOUT_ADDRESS = "/about";
export const CONTACT_ADDRESS = "/contact";

export const HOME = "Home";
export const ABOUT = "About";
export const CONTACT = "Contact";

export const FIRST_NAME = "Jonathan";
export const LAST_NAME = "Lascano-Rusu";

// libraries, frameworks, languages

export const HTML = "HTML";
export const CSS = "CSS";
export const JAVASCRIPT = "JavaScript";
export const TYPESCRIPT = "TypeScript";
export const PYTHON = "Python";
export const GIT = "git";
export const GIT_HUB = "GitHub";
export const REACT = "React";
export const REACT_NATIVE = "React Native";
export const NODE_JS = "Node.js";
export const EXPRESS = "Express.js";
export const MONGO_DB = "MongoDB";

export const LANGUAGE_ARRAY = [
  HTML,
  CSS,
  JAVASCRIPT,
  TYPESCRIPT,
  PYTHON,
  REACT,
  REACT_NATIVE,
  NODE_JS,
  EXPRESS,
  MONGO_DB,
  GIT,
  GIT_HUB,
];

// clipboard messages
export const COPY = "COPY";
export const COPIED = "COPIED";
export const FAILED_TO_COPY = "FAILED_TO_COPY";

// Message Fragments
export const HOME_PAGE_STATEMENT = (
  <>
    Thank you for your interest in my work! I have experience building various
    kinds of websites and mobile applications with responsive design. I am
    currently working on the mobile app for{` `}
    <a href="https://wisdm.webflow.io/">Wisdm</a>
  </>
);

export const ABOUT_PAGE_MESSAGE_ONE = (
  <>
    I was born and raised in the San Francisco Bay Area and currently reside in
    Berkeley.
    <br />
    <br />
    I started programming in 2020 when I decided to switch from a career in fine
    dining.
    <br />
    <br />
    When I'm not coding, you can find me playing guitar or hanging out with my
    wife!
    <br />
    <br />
    My programming related hobbies include reading documentation, laughing at
    coding memes, and writing clean and efficient solutions.
  </>
);

export const ABOUT_PAGE_MESSAGE_TWO = (
  <>
    LET'S MAKE
    <br />
    <br />
    SOMETHING
    <br />
    <br />
    SPECIAL
    <br />
    <br />
    TOGETHER.
  </>
);
