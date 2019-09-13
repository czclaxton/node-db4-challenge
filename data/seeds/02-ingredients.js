exports.seed = function(knex) {
  return knex("ingredients").insert([
    { id: 1, ingredient_name: "flour" },
    { id: 2, ingredient_name: "sugar" },
    { id: 3, ingredient_name: "onions" }
  ]);
};
