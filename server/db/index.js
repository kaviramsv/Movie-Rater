const { Pool } = require('pg')


const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
};

const pool = new Pool(config);//or can give new Pool() without config inside

module.exports = {
  query: (text, params) => pool.query(text, params),
}

