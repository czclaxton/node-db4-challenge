exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("recipe_name", 128).notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("ingredient_name", 128).notNullable();
    })
    .createTable("instructions", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
      tbl.string("recipe_instruction");
      tbl.integer("step_number");
    })
    .createTable("recipe_ingredients", tbl => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("quantity")
        .unsigned()
        .notNullable();
      tbl.primary(["recipe_id", "ingredient_id"]);
    })
    .createTable("recipe_instructions", tbl => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("instruction_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("instructions")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.primary(["recipe_id", "instruction_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_instructions")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
