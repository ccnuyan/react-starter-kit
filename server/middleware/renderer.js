import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import assets from '../../build/assets.json';

import config from '../../config/index';

const { cdnScripts } = config;

class IndexComponent extends Component {
  render = () => {
    return (
      <html className="no-js" lang="zh-CN">
        <head>
          <meta charSet="utf-8" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <title>
            { config.title }
          </title>
          <meta content="Google's material design UI components built with React." name="description" />
          <meta content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1" name="viewport" />
          { /* <!-- Use minimum-scale=1 to enable GPU rasterization -->*/ }
          <title>
            { config.title }
          </title>
          <link href="//cdn.bootcss.com/normalize/6.0.0/normalize.min.css" rel="stylesheet" />
          { Object.keys(assets).map(key => (
            <link href={ assets[key].css } key={ key } rel="stylesheet" />)) }
          <script src="//cdn.bootcss.com/modernizr/2.8.3/modernizr.min.js" />
        </head>
        <body>
          <div id="react" />
          { Object.keys(cdnScripts).map(key => (
            <script key={ key } src={ cdnScripts[key] } />)) }
          { Object.keys(assets).map(key => (
            <script key={ key } src={ assets[key].js } />)) }
        </body>
      </html>
    );
  }
}

const renderer = () => {
  return (req, res) => {
    const content = `<!doctype html>${ReactDOMServer.renderToStaticMarkup(<IndexComponent />)}`;
    res.type('.html');
    res.send(content);
  };
};

export default renderer;
