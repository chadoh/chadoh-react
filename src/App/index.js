import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import Calendar from '../Calendar';
import chadoh from './chadoh.jpeg';
import './App.css';
import {sample} from 'lodash';

const punctuation = [
  '. ',
  '! ',
  '? ',
  '',
];

class App extends Component {
  render() {
    const title = `chad${sample(punctuation)}oh${sample(punctuation)}`;
    return (
      <div className="App">
        <Helmet><title>{title}</title></Helmet>
        <div className="App-header">
          <h1 className="App-title">{title}</h1>
          <img src={chadoh} className="App-logo" alt="logo" />
          <p className="App-intro">
            <span>
              Hello, friend! Scroll down to learn about my entire life!
            </span>
          </p>
        </div>
        <Calendar/>
      </div>
    );
  }
}

export default App;
