const express = require("express");
const http = require("http");
const routes = require('./app/web/routes/index');
const { HTTP_PORT } = require('./config/app.json');
require('dotenv').config();

const app = express();

// use routes
app.use(routes);

const httpServer = http.createServer(app);

httpServer.listen(HTTP_PORT);
console.log(`server listening at port ${HTTP_PORT}`);