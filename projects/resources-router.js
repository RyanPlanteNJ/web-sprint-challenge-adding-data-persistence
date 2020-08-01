const router = require('express').Router()
const Projects = require('./projects-model')
const {validateProjectId} = require('../middleware.js');


router.get('/', async (req, res, next) => {
  try {
    const resources = await Projects.findResource()
    res.json(resources)
  } catch (error) {
    next (error)
  }
})

router.get('/:id/projects', async (req, res, next) => {
  try {
    const projects = await Projects.findResources(req.params.id)
    res.json(projects)
  } catch (error) {
    next (error)
  }
})

module.exports = router;
