
exports.seed = async function(knex) {
    await knex('tasks').insert([
        {project_id: 1, description: "Task 1 for Project 1"},
        {project_id: 1, description: "Task 2 for Project 1"},
        {project_id: 2, description: "Task 1 for Project 2"},
        {project_id: 2, description: "Task 2 for Project 2"},
      ])
};
