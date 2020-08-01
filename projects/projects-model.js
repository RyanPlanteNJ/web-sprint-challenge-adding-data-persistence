const db = require('../data/db-config.js')

function find() {
  return db('projects');
}

function findResource() {
  return db('resources')
}

function findTask() {
  return db('tasks')
}

function findById(id) {
  return db('projects')
  .where({ id })
  .first()
}

function findTasks(id) {
  return db('projects as p')
  .where('p.id', id)
  .join('tasks as t', 't.project_id', 'p.id')
  .select('p.name','t.description as Description', 't.notes', 't.task_finished')
  .orderBy('t.id')
}

function findResources(id) {
  return db('projects_resources as pr')
  .where('pr.project_id', id)
  .join('resources as r', 'r.id', 'pr.resource_id')
  .select('pr.project_id as Project')
}

function add(projectData) {
  return db ('projects')
  .insert(projectData)
  .then(project => {
    return findById(project[0])
  })
}

function addResource(resourceData) {
  return db('resources')
  .insert(resourceData)
  .then(resource => {
    return findResources(resource[0])
  })
}

function addTask(taskData) {
  return db('tasks')
  .insert(taskData)
  .then(task => {
    return findTasks(task[0])
  })

}

module.exports = {
  find,
  findResource,
  findTask,
  findById,
  findTasks,
  findResources,
  add,
  addResource,
  addTask
}
