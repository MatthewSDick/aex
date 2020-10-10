import React from 'react';
import aex from './aex.png'
import idp from './idp.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="main">
        <div><h1>Future home of Antietam Exchange Club</h1></div>
        <div><img src={aex} alt="logo" /></div>
        <div><h1>Designed by Iconic Digital Palette</h1></div>
        <div><img class="idp" src={idp} alt="logo" /></div>
      </div>
    </div>
  );
}

export default App;
