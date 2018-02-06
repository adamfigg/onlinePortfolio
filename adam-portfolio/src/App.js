import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FrontPage from './components/FrontPage/FrontPage.js';
import NavBar from './components/NavBar/NavBar.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Resume from './components/Resume/Resume.js';
import BottomNavBar from './components/BottomNavBar/BottomNavBar.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Adam Figgat's Web Dev Portfolio</h1>
        </header>


        <NavBar/>
        <FrontPage/>
        <Portfolio/>
        <Resume/>
        <BottomNavBar/>

      </div>
    );
  }
}

export default App;
