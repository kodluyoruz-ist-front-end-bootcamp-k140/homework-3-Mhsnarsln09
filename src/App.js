import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { BodyRender } from './components/body-render';
import { ThemeContext } from './context';


          


function App() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const data = {
    theme,
    setTheme
  }
 
  return (
    <ThemeContext.Provider value={data} >
      <BodyRender/>
    </ThemeContext.Provider>
    
  );
}

export default App;
