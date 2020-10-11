import React from 'react';
import aex from './aex.png'
// import idp from './idp.jpeg'
import './App.css';
import AboutUS from './Components/AboutUs'
import Charities from './Components/Charities'
import Projects from './Components/Projects'
import Footer from './Components/Footer';
import Navsbar from './Components/Navsbar'
import Home from './Components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  return (
    <>    
    <div className="App">
     <Router>
     <Navsbar />
      
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/AboutUS" component={AboutUS}>
            <AboutUS />
          </Route>
          <Route path="/Projects" component={Projects}>
            <Projects />
          </Route>
          <Route path="/Charities" component={Charities}>
            <Charities />
          </Route>
          <Route path="/Home" component={Home}>
            <Home />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
    </Router>









      <div class="main">
        <br></br>
        <div><h1>Future home of Antietam Exchange Club</h1></div>
        <div><img src={aex} alt="logo" /></div>
        {/* <div><h1>Designed by Iconic Digital Palette</h1></div>
        <div><img class="idp" src={idp} alt="logo" /></div> */}
      </div>
    </div>  
    <Footer />
    </>
  );
}

export default App;
