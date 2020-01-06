const express = require("express");
const http = require("http");
const routes = require('./routes/index');
const { HTTP_PORT } = require('./config.json');

const app = express();

// use routes
app.use(routes);

const httpServer = http.createServer(app);

httpServer.listen(HTTP_PORT);
console.log(`server listening at port ${HTTP_PORT}`);