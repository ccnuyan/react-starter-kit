import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReadMe extends Component {
  render = () => {
    return (
      <div dangerouslySetInnerHTML={ { __html: this.props.content } } />
    );
  }
}

ReadMe.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ReadMe;
