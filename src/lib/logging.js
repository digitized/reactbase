/* eslint-disable no-console */
const env = process.env.NODE_ENV || 'development';

export default {
  system: (...args) => {
    // Always print
    const date = new Date();
    console.log(`[${env}][${date.toLocaleString()}] -`, ...args);
  },
  log: (...args) => {
    if (env !== 'production') {
      console.log(...args);
    }
  },
  warn: (...args) => {
    if (env !== 'production') {
      console.warn(...args);
    }
  },
  error: (...args) => {
    if (env !== 'production') {
      console.error(...args);
    }
  },
};
