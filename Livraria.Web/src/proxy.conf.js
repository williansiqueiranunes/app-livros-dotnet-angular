const { env } = require('process');

const target = 'http://localhost:5135';
const PROXY_CONFIG = [
  {
    context: [
      "/api/",
    ],
    target,
    secure: false
  }
]
module.exports = PROXY_CONFIG;
