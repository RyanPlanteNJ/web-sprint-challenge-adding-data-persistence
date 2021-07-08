
exports.seed = async function(knex) {
  await knex('projects').insert([
        { name: "Start Node Project"},
        { name: "Beat Ghost of Tsushima"},
        { name: "Re-read Solo Leveling"}
      ])
};
