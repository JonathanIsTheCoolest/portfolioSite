import React, { useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homeComponents/Home/Home";
import About from "./components/aboutComponents/About/About";
import Contact from "./components/contactComponents/Contact/Contact";
import "./App.css";

import {
  COLOR_OBJECT,
  LIGHT_THEME_COLOR_OBJECT,
  HOME,
  ABOUT,
  CONTACT,
  HOME_ADDRESS,
  ABOUT_ADDRESS,
  CONTACT_ADDRESS,
} from "./constants";

const getColorObject = () => {
  try {
    const colorObject = localStorage.getItem(COLOR_OBJECT);
    return colorObject ? JSON.parse(colorObject) : LIGHT_THEME_COLOR_OBJECT;
  } catch (error) {
    console.error(`Something went wrong: ${error}`);
    return LIGHT_THEME_COLOR_OBJECT;
  }
};

export const UserContext = createContext();
const ContextProvider = ({ children }) => {
  const [isToggledNavBar, setIsToggledNavBar] = useState(false);
  const [isToggledOffNavBar, setIsToggledOffNavBar] = useState(false);
  const [introAnimationShouldRun, setIntroAnimationShouldRun] = useState(true);
  const [colorObject, setColorObject] = useState(getColorObject());
  const toggleOffNavBar = () => {
    if (isToggledNavBar && !isToggledOffNavBar) {
      setIsToggledOffNavBar(true);
      setTimeout(() => {
        if (isToggledNavBar) {
          setIsToggledNavBar(false);
          setIsToggledOffNavBar(false);
        }
      }, 1000);
    }
  };

  return (
    <UserContext.Provider
      value={{
        isToggledNavBar,
        setIsToggledNavBar,
        isToggledOffNavBar,
        setIsToggledOffNavBar,
        introAnimationShouldRun,
        setIntroAnimationShouldRun,
        colorObject,
        setColorObject,
        toggleOffNavBar,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path={HOME_ADDRESS} element={<Home isSelected={HOME} />} />
          <Route path={ABOUT_ADDRESS} element={<About isSelected={ABOUT} />} />
          <Route
            path={CONTACT_ADDRESS}
            element={<Contact isSelected={CONTACT} />}
          />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export const ProviderContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("Provider context undefined");
  }
  return {
    isToggledNavBar: context.isToggledNavBar,
    setIsToggledNavBar: context.setIsToggledNavBar,
    isToggledOffNavBar: context.isToggledOffNavBar,
    setIsToggledOffNavBar: context.setIsToggledOffNavBar,
    introAnimationShouldRun: context.introAnimationShouldRun,
    setIntroAnimationShouldRun: context.setIntroAnimationShouldRun,
    colorObject: context.colorObject,
    setColorObject: context.setColorObject,
    toggleOffNavBar: context.toggleOffNavBar,
  };
};

export default App;
