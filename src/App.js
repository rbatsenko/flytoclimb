import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    showBackground: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showBackground: true });
    }, 1000)
  }
  render() {
    const { showBackground } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className={`bg ${showBackground ? 'visible' : ''}`}></div>
        </header>
      </div>
    );
  }
}

export default App;
