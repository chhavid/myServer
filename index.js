const { createHandler } = require('./src/server/router.js');
const { startServer } = require('./src/server/server.js');
const { notFound } = require('./src/handlers/notFound.js');
const { serveFileContent } = require('./serveStaticFile.js');

module.exports = { createHandler, startServer, notFound, serveFileContent };