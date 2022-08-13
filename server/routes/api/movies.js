const express = require('express')
const router = express.Router()

const db = require("../../db")


router.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM movies");
    res.status(200).json({
      status: "success",
      results: result.rows.length,
      data: {
        movies: result.rows
      }
    })
  } catch (err) {
    console.log(err);
  }
})


router.get("/:id", async (req, res) => {
  let id = req.params.id;
  console.log("id is", id);
  try {
    let result = await db.query(`SELECT * FROM movies WHERE id = $1 `, [id]);
    console.log(res);
    res.status(200).json({
      status: "success",
      data: {
        movie: result.rows[0]
      }
    })
  } catch (err) {
    console.log(err);
  }
})

router.put("/:id", async (req, res) => {
  let id = req.params.id;
  let name = req.body.name;
  let year = req.body.year;
  let genre = req.body.genre;
  try {
    const results = await db.query("UPDATE movies SET name=$1, year=$2, genre=$3 WHERE id= $4 returning *", [name, year, genre, id])
    console.log(results.rows[0])
    res.status(200).json({
      movie: results.rows[0]
    })
  } catch (err) {
    console.log(err);
  }
})


router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const result = await db.query(`INSERT INTO movies(name,year,genre) VALUES ($1,$2,$3) RETURNING *`,
      [req.body.name, req.body.year, req.body.genre]);
    console.log(result.rows[0])
    res.status(204).json({
      status: "success",
      result: result.rows[0]
    });
  } catch (err) {
    console.log(err)
  }
})

router.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id)
    let result = await db.query("DELETE FROM movies where id = $1 Returning *", [id]);
    res.status(200).json({
      movie: result.rows[0],
    })

  } catch (err) {
    console.log(err);
  }
})


module.exports = router