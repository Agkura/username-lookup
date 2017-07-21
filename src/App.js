import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  initialize(){
    this.results;
  }

  componentWillMount(){
    fetch('https://www.reddit.com/user/kijafa/submitted.json')
      .then(res => res.json())
      .then(res => this.results = res);

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {for(let ele in this.results){
            <div></div>
          }}
        </div>
      </div>
    );
  }
}

export default App;
