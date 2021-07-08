
exports.up = async function(knex) {
  await knex.schema.createTable('projects', table => {
    table.increments('id')
    table.string('name', 255).unique().notNullable()
    table.text('description')
    table.boolean('project_finished').notNullable().defaultTo(false)
  })

  await knex.schema.createTable('tasks', table => {
    table.increments('id')
    table.string('description', 255).notNullable()
    table
      .integer('project_id')
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE').
      onUpdate('CASCADE')
    table.string('notes', 255)
    table.boolean('task_finished').notNullable().defaultTo(false)
  })

  await knex.schema.createTable('resources', table => {
    table.increments('id')
    table.string('name', 255).unique().notNullable()
    table.text('description')
  })

  await knex.schema.createTable('projects_resources', table => {
    table
      .integer('project_id')
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table
      .integer('resource_id')
      .references('id')
      .inTable('resources')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.primary(['resource_id', 'project_id'])
  })

};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('projects_resources')
  await knex.schema.dropTableIfExists('resources')
  await knex.schema.dropTableIfExists('tasks')
  await knex.schema.dropTableIfExists('projects')
};
