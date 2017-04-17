import express from 'express';
import path from 'path';
import compression from 'compression';

import renderer from './middleware/renderer';
import config from '../config';

const app = express();

app.use(compression());
app.use('/', express.static(path.join(__dirname, '../build/')));
app.use('/', express.static(path.join(__dirname, '../public/')));
app.get('/:app', renderer);
app.get('/', renderer);

// serve the app
const PORT = process.env.PORT || config.port;

/* eslint-disable no-console */
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`app is listening on port ${PORT}`);
  }
});
/* eslint-disable no-console */

