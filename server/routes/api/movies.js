const express = require('express')
const router = express.Router()

const db = require("../../db")


router.get("/", async (req, res) => {
  try {


    const result = await db.query("SELECT * FROM movies left join (select movie_id, count(*), AVG(rating) as average_rating from reviews group by movie_id) reviews on movies.id = reviews.movie_id; ");
    console.log(result);
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

  try {
    // let movie = await db.query(`SELECT * FROM movies WHERE id = $1 `, [id]);
    const movie = await db.query("SELECT * FROM movies left join (select movie_id, count(*), AVG(rating) as average_rating from reviews group by movie_id) reviews on movies.id = reviews.movie_id where id = $1; ", [id]);
    console.log(movie);

    let review = await db.query(`SELECT * FROM reviews WHERE movie_id = $1 `, [id]);
    console.log("review", review);
    res.status(200).json({
      status: "success",
      data: {
        movie: movie.rows[0],
        review: review.rows
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
    res.status(200).json({
      status: "success",
      result: result.rows[0]
    });
  } catch (err) {
    console.log(err)
  }
})

router.post("/:id/reviews", async (req, res) => {
  console.log(req);
  try {
    const newReview = await db.query("INSERT INTO REVIEWS(movie_id,name,review,rating) Values($1,$2,$3,$4) returning *",
      [req.params.id, req.body.name, req.body.review, req.body.rating]);
    console.log(newReview.rows);
    res.status(200).json({
      data: {
        review: newReview.rows[0],
      }
    })

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