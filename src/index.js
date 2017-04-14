import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

import './style.scss';
import readme from '../readme.md';

class Root extends Component {
  render = () => {
    return (
      <div style={ { padding: '2em' } }>
        <div dangerouslySetInnerHTML={ { __html: readme } } />
      </div>
    );
  }
}

const rootNode = document.getElementById('react');

ReactDOM.render(<Root />, rootNode);

