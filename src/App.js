import React from 'react';
import logo from './logo.svg';
import aex from './aex.png'
import idp from './idp.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Future home of Antietam Exchange Club</h1>
      <header className="App-header">
        <img src={aex} alt="logo" />
        <img src={idp} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
