import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

/* eslint-disable import/first*/

import './style.scss';
import content from '../readme.md';
import ReadMe from './ReadMe';

/* eslint-disable import/first*/

class Root extends Component {
  render = () => {
    return (
      <div style={ { padding: '2em' } }>
        <h1>Home</h1>
        <ReadMe content={ content }/>
      </div>
    );
  }
}

const rootNode = document.getElementById('react');

ReactDOM.render(<Root />, rootNode);

