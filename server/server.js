require('dotenv').config()
const express = require('express');
const morgan = require("morgan")
const app = express();
app.use(morgan("default"));

const moviesRoutes = require("./routes/api/movies")

const PORT = process.env.PORT || 5000;

//posiible to chain mutiple middleware;reduces the code of route handler if used properly
//has access to res and the request object
// app.use((req, res, next) => {
//   console.log("middleware is running");
//   next();
// })
app.use('/api/v1', moviesRoutes);

app.listen(PORT, () => {
  console.log("app listening on port 3000")
})