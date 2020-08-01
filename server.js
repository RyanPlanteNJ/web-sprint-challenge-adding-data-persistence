const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const db = require('./data/db-config.js');

const server = express();

server.get('/', (req, res) => {
  res.status(200).json({ api: "up and running and ready to take your projects" })
})


module.exports = server;
