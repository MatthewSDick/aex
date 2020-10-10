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
      </header>
    </div>
  );
}

export default App;
