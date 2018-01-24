import React, { Component } from 'react';
import './App.css';
import Main from "./components/main/main.component"

class App extends Component {
  render() {
    return (
      <div id="main-wrapper">

        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Weather Chat Bot</a>
            </div>
          </div>
        </nav>

        <div className="container">
          <Main />
        </div>
        
      </div>
    );
  }
}

export default App;
