const express = require("express");

const recData = require("./recipes-model");

const router = express.Router();

router.get("/recipes-list", (req, res) => {
  // get all species from the database
  recData
    .getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/ingredients-list", (req, res) => {
  // get all species from the database
  recData
    .getIngredients()
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/instructions-list", (req, res) => {
  // get all species from the database
  recData
    .getInstructions()
    .then(instructions => {
      res.status(200).json(instructions);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.get("/recipe-ingredients", (req, res) => {
  // get all species from the database
  recData
    .getRecIngr()
    .then(recipe_ingredients => {
      res.status(200).json(recipe_ingredients);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.get("/recipe-instructions", (req, res) => {
  // get all species from the database
  recData
    .getRecInst()
    .then(recipe_instructions => {
      res.status(200).json(recipe_instructions);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id/shoppinglist", (req, res) => {
  const { id } = req.params;

  recData
    .getShoppingList(id)
    .then(shoppinglist => {
      res.status(200).json(shoppinglist);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;

  recData
    .getSteps(id)
    .then(steps => {
      res.status(200).json(steps);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(error);
    });
});

module.exports = router;
