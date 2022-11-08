import React, { createContext, useState, useContext } from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route, 
} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import './App.css';

import { LOCAL_COLOR_OBJECT, HOME, ABOUT } from './constants';


export const UserContext = createContext();
const ContextProvider = ({ children }) => {
  const context = {
    introAnimationShouldRun: true,
    colorObject: JSON.parse(LOCAL_COLOR_OBJECT),
    setContextState: (name, value) => {
      setUserContext((prevState) => ({ ...prevState, [name]: value }))
    }
  };
  
  const [ userContext, setUserContext ] = useState(context);

  return (
    <UserContext.Provider value={userContext}>
      {children}
    </UserContext.Provider>
  )
}

function App() {

  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home isSelected={HOME}/>}/>
          <Route path="/about" element={<About isSelected={ABOUT}/>}/>
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export const ProviderContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('Provider context undefined')
  }
  // return context
  return {
    introAnimationShouldRun: context.introAnimationShouldRun,
    colorObject: context.colorObject,
    setContextState: context.setContextState,
  }
} 

export default App;