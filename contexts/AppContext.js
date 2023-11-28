import React, {createContext, useContext, useState} from 'react';
import {View, Text} from 'react-native';

const AppContext = createContext(true);

export const useDarkMode = () => {
  return useContext(AppContext);
};

const AppProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <AppContext.Provider value={{isDarkMode, setIsDarkMode}}>
      {children}
    </AppContext.Provider>
  );
};

export default context;
