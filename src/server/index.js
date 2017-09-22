import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';
import middleware from '../lib/middleware';
import logging from '../lib/logging';

const app = express();

app
  .use(bodyParser.json())
  .use(middleware.routeLogging)
  .use('/bundle.js', middleware.serveCompressedBundle)
  .use(express.static('public'))
  .use(router);

const server = app.listen(process.env.PORT || 3000, () => {
  const port = server.address().port;
  logging.system(`Connected on port ${port}.`);
});
