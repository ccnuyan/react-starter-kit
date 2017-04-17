import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

import './style.scss';
import content from '../readme.md';
import ReadMe from './ReadMe';

class Root extends Component {
  render = () => {
    return (
      <div style={ { padding: '2em' } }>
        <h1>app2</h1>
        <ReadMe content={ content }/>
      </div>
    );
  }
}

const rootNode = document.getElementById('react');

ReactDOM.render(<Root />, rootNode);

