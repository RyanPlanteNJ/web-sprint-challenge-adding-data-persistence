const router = require('express').Router()
const Projects = require('./projects-model.js')
const {validateProjectId} = require('../middleware.js');

router.get('/', async (req, res, next) => {
  try {
    const projects = await Projects.find()
    res.json(projects)
  } catch (error) {
    next (error)
  }
})

router.get('/:id', validateProjectId, async (req, res, next) => {
  const project = await Projects.findById(req.params.id);
  if(project) {
    res.status(200).json(project);
  } else {
    console.log(error);
    res.status(500).json({
      error: "Project informatin could not be retreived"
    });
  }

})

router.get('/:id/tasks', validateProjectId, async (req,res, next) => {
  try {
  const tasks = await Projects.findTasks(req.params.id);
    res.status(200).json(tasks);
  } catch (error) {
    next (error)
  }
})

module.exports = router
