const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
var express = require('express');
var cors = require('cors');
var app = express();

server.use(middlewares);
server.use(router);

server.listen(port);

app.use(cors());
