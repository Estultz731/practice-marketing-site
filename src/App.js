import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const cardOneText = 'Lorem';
const cardTwoText = 'Ipsum';
const cardThreeText = 'Nunc';

class App extends Component {
  render() {
    return (
      <>
        <nav>
          <a className="left" href="#acme">Acme Marketing</a>
          <a className="right" href="#contact">Contact</a>
          <a className="right" href="#social">Social</a>
        </nav>
      </>
    );
  }
}

export default App;
