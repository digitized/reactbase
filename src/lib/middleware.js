import logging from './logging';

const env = process.env.NODE_ENV;

const routeLogging = (req, res, next) => {
  logging.system(`${req.url}`);
  next();
};

const serveCompressedBundle = (req, res, next) => {
  if (env === 'production') {
    req.url += '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/javascript');
  }
  next();
};

export default {
  routeLogging,
  serveCompressedBundle,
};
