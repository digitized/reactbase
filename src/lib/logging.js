/* eslint-disable no-console */
const env = process.env.NODE_ENV || 'development';
const colorizeEnv = () => {
  if (env === 'production') {
    return `\x1b[32m(${env})\x1b[0m`; // green
  }
  return `\x1b[36m(${env})\x1b[0m`; // cyan
};
const colorizeTimestamp = () => { // yellow
  const time = new Date().toLocaleString();
  return `\x1b[33m[${time}]\x1b[0m`;
};

export default {
  system: (...args) => {
    // Always print
    console.log(`${colorizeEnv()} ${colorizeTimestamp()} -`, ...args);
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
