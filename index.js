const { createServer } = require('./src/server/server.js');

const { requestHandler } = require('./src/app.js');

createServer(7000, requestHandler);
