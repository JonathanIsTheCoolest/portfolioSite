import React, { useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homeComponents/Home/Home";
import About from "./components/aboutComponents/About/About";
import Contact from "./components/contactComponents/Contact/Contact";
import RouteError from "./components/errorPages/RouteError/RouteError";
import NavBar from "./components/navBarComponents/NavBar/NavBar";
import FlashLight from "./components/FlashLight/FlashLight";
import Footer from "./components/footerComponents/Footer/Footer";
import "./App.css";

import { getColorObject } from "./apiCalls/getColorObject";

import { HOME_ADDRESS, ABOUT_ADDRESS, CONTACT_ADDRESS } from "./constants";

export const UserContext = createContext();
const ContextProvider = ({ children }) => {
  const [isToggledNavBar, setIsToggledNavBar] = useState(false);
  const [isToggledOffNavBar, setIsToggledOffNavBar] = useState(false);
  const [introAnimationShouldRun, setIntroAnimationShouldRun] = useState(true);
  const [colorObject, setColorObject] = useState(getColorObject());
  const [navSelected, setNavSelected] = useState("");
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
        navSelected,
        setNavSelected,
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
        <NavBar />
        <Routes>
          <Route path={HOME_ADDRESS} element={<Home />} />
          <Route path={ABOUT_ADDRESS} element={<About />} />
          <Route path={CONTACT_ADDRESS} element={<Contact />} />
          <Route path="*" element={<RouteError />} />
        </Routes>
        <FlashLight />
        <Footer />
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
    navSelected: context.navSelected,
    setNavSelected: context.setNavSelected,
    colorObject: context.colorObject,
    setColorObject: context.setColorObject,
    toggleOffNavBar: context.toggleOffNavBar,
  };
};

export default App;
