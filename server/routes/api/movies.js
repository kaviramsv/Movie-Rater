const express = require('express')
const router = express.Router()

const db = require("../../db")


router.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM movies");
    res.status(200).json({
      status: "success",
      data: {
        movies: result.rows
      }
    })
  } catch (err) {
    console.log(err);
  }


})

module.exports = router