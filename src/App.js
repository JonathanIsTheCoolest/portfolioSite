import React, { createContext, useState, useContext } from "react";
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

const colorObject = () => {
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
  const context = {
    isToggledNavBar: false,
    isToggledOffNavBar: false,
    introAnimationShouldRun: true,
    colorObject: colorObject(),
    setContextState: (name, value) => {
      setUserContext((prevState) => ({ ...prevState, [name]: value }));
    },
    toggleOffNavBar: () => {
      setUserContext((prevState) => ({
        ...prevState,
        isToggledOffNavBar: true,
      }));
      setTimeout(
        () =>
          !userContext.isToggledOffNavBar
            ? setUserContext((prevState) => ({
                ...prevState,
                isToggledNavBar: false,
                isToggledOffNavBar: false,
              }))
            : null,
        1000
      );
    },
  };

  const [userContext, setUserContext] = useState(context);

  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
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
    isToggledOffNavBar: context.isToggledOffNavBar,
    introAnimationShouldRun: context.introAnimationShouldRun,
    colorObject: context.colorObject,
    setContextState: context.setContextState,
    toggleOffNavBar: context.toggleOffNavBar,
  };
};

export default App;
