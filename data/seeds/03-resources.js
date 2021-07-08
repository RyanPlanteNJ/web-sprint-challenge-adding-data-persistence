
exports.seed = async function(knex) {
      await knex('resources').insert([
        {name: "Computer"},
        {name: "PlayStation 4"},
        {name: "Elgato"}
      ])
};
