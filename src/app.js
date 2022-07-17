const { createHandler } = require('./server/router.js');
const { serveFileContent } = require('./app/serveFileContent.js');
const { notFoundHandler } = require('./app/notFoundHandler.js');

const sessions = {};

const handlers = [
  serveFileContent('./public'),
  notFoundHandler
];

const requestHandler = createHandler(handlers);

module.exports = { requestHandler };