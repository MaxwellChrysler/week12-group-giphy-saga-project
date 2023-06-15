const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images
router.get("/", (req, res) => {
  const queryText = `
    SELECT "favorites"."id", "favorites"."url", "category"."name"
    FROM "favorites" 
    JOIN "category"
    ON "favorites"."category_id" = "category"."id";`;
    pool.query(queryText)
  .then((response) => { 
    res.send(response.rows);
    res.sendStatus(200); 
  }) 
  .catch((error) => {
    console.log('error in server favorites GET', error);
  })
});

// add a new favorite
router.post("/", (req, res) => {
  res.sendStatus(200);
});

// update given favorite with a category id
router.put("/:favId", (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
