const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const db = require('./data/db-config.js');

const projectsRouter = require('./projects/project-router.js')
const resourcesRouter = require('./projects/resources-router.js')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)

server.get('/', (req, res) => {
  res.status(200).json({ api: "up and running and ready to take your projects" })
})


module.exports = server;
