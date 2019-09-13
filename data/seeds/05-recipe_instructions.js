exports.seed = function(knex) {
  // Inserts seed entries
  return knex("recipe_instructions").insert([
    { recipe_id: 1, instruction_id: 1 },
    { recipe_id: 1, instruction_id: 2 },
    { recipe_id: 1, instruction_id: 3 }
  ]);
};
