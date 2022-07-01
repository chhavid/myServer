const { createHandler } = require('./src/server/router.js');
const { startServer } = require('./src/server/server.js');
const { notFound } = require('./src/handlers/notFound.js');
const { serveFileContent } = require('./src/handlers/serveStaticFile.js');
const { serveFileContent } = require('./src/handlers/serveStaticFile.js');
const { bodyParser } = require('./src/handlers/bodyParser.js');

module.exports = { createHandler, startServer, notFound, serveFileContent, bodyParser };