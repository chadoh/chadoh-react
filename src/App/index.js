import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import Calendar from '../Calendar';
import './App.css';
import {sample} from 'lodash';

const punctuation = [
  '. ',
  '! ',
  '? ',
  '',
];

const randomTitle = () =>
  `chad${sample(punctuation)}oh${sample(punctuation)}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: randomTitle(),
    }
  }

  changeTitle = () => {
    this.setState({title: randomTitle()});
  }

  render() {
    const {title} = this.state;
    return (
      <div className="App">
        <Helmet><title>{title}</title></Helmet>
        <div className="App-header">
          <h1 className="App-title">
            <span>
              <span onMouseOver={this.changeTitle}>{title}</span>
              <small>the website of a human</small>
            </span>
          </h1>
          <div className="App-logo-wrap">
            <img src="chadoh.jpeg" className="App-logo" alt="logo" />
            <nav>
              <a href="https://medium.com/@chadoh">I write!</a>
              <a href="https://twitter.com/chadoh">I tweet!</a>
              <a href="http://ilike.earthclouds.best/">I speak!</a>
              <a href="https://www.instagram.com/wildobro/">I photo!</a>
              <a href="http://github.com/chadoh">I code!</a>
            </nav>
          </div>
          <p className="App-intro">
            <span>
              Hello, friend!<br/>
              Scroll down?
            </span>
          </p>
        </div>
        <Calendar/>
      </div>
    );
  }
}

export default App;
