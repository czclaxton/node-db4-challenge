const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getIngredients,
  getInstructions,
  getRecIngr,
  getRecInst,
  getShoppingList,
  getSteps
};

function getRecipes() {
  return db("recipes");
}

function getIngredients() {
  return db("ingredients");
}

function getInstructions() {
  return db("instructions");
}

function getRecIngr() {
  return db("recipe_ingredients");
}

function getRecInst() {
  return db("recipe_instructions");
}

function getShoppingList(id) {
  return db("recipe_ingredients")
    .join("ingredients", "ingredients.id", "recipe_ingredients.ingredient_id")
    .select("ingredient_name", "quantity")
    .where({ recipe_id: id });
}

function getSteps(id) {
  return db("instructions")
    .where({ recipe_id: id })
    .orderBy("step_number");
}
