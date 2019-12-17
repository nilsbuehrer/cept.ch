import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi {props.name}.
        </p>
        <a
          className="App-link"
          href="https://ception.ch"
          target="_blank"
          rel="noopener noreferrer"
        >
          my website.
        </a>
      </header>
    </div>
  );
}

export default App;
