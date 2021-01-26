import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";

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
      <GlobalStyles />
      <div className="App" onClick={toggleTheme}>
        <header className="App-header">
          <h1>cept.ch</h1>
          <span>by Nils Bührer</span>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
