import React, { createContext, useState } from "react";

export const DarkContext = createContext();

export const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")));
  return (
    <DarkContext.Provider value={{ darkMode, setDarkMode }}>
      {props.children}
    </DarkContext.Provider>
  );
};
