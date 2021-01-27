import React, { useState } from "react";
import "./App.scss";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import Title from './Title/Title';

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet"></link>
      <GlobalStyles />
      <div className="App" onClick={toggleTheme}>
        <header className="App-header">
          <Title />
          <span>by Nils Bührer</span>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
