import React, { useContext } from "react";
import { DarkContext } from "./DarkContext";

const DarkButton = () => {
  const {darkMode,setDarkMode} = useContext(DarkContext);

   const handleTheme =() => {
      setDarkMode(!darkMode);
      localStorage.setItem("darkMode", !darkMode);
   }

  return (
    <button className={darkMode 
    ? 'btn btn-floating fa fa-toggle-on' 
    : 'btn btn-floating fa fa-toggle-off'
    } 
    onClick={handleTheme}>
   
     
    </button>
  );
};

export default DarkButton;
