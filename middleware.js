const Projects = require('./projects/projects-model.js');

module.exports = {
  logger: function (req, res, next) {
    console.log(`${req.method} Request, ${req.url}, ${Date()}`);
    next();
  },

  validateProjectId: function (req, res, next) {
    Projects.findById(req.params.id)
    .then(project => {
      if (project) {
        req.project = project;
        next();
      } else {
        res.status(404).json({
          message: 'The Project you are trying to find does not texist'
        })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "Something broke" });
    });
  },



}
