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
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <div className="card">
                <div className="top"><img className="pictures" src="./images/Dudes Typing.jpg" /></div>
                <div className="bottom">{cardOneText}</div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="card">
                <div className="top"><img className="pictures" src="./images/Wall O Stickies.jpg" /></div>
                <div className="bottom">{cardTwoText}</div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="card">
                <div className="top"><img className="pictures" src="./images/Yoko Ono.jpg" /></div>
                <div className="bottom">{cardThreeText}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
