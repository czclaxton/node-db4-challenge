exports.seed = function(knex) {
  return knex("instructions").insert([
    { id: 1, recipe_id: 1, recipe_instruction: "mix together", step_number: 1 },
    { id: 2, recipe_id: 1, recipe_instruction: "add water", step_number: 2 },
    {
      id: 3,
      recipe_id: 1,
      recipe_instruction: "bake at 350 degrees",
      step_number: 3
    }
  ]);
};
