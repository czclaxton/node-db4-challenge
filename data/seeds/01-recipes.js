exports.seed = function(knex) {
  return knex("recipes").insert([
    { id: 1, recipe_name: "pizza" },
    { id: 2, recipe_name: "tacos" },
    { id: 3, recipe_name: "casserole" }
  ]);
};
