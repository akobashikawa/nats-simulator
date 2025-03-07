import config from '../config.js';

export function log(...args) {
  if (config.log) {
    console.log(...args);
  }
}