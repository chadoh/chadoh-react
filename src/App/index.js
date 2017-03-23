import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import chadoh from './chadoh.jpeg';
import './App.css';
import {sample} from 'lodash';

const punctuation = [
  '. ',
  '! ',
  '? ',
  ' – ',
  '',
];

class App extends Component {
  render() {
    const title = `chad${sample(punctuation)}oh${sample(punctuation)}`;
    return (
      <div className="App">
        <Helmet><title>{title}</title></Helmet>
        <h1>{title}</h1>
        <img src={chadoh} className="App-logo" alt="logo" />
        <p className="App-intro">
          Hello, friend!
        </p>
      </div>
    );
  }
}

export default App;
