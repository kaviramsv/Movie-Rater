const { Pool } = require('pg')

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
};

const pool = new Pool(config);

module.exports = pool

//1.can give new Pool() without config inside

//2. pool.connect(() => {
//   console.log(`Connected to database on port ${config.port}`);
// });

// module.exports = pool
//  {
//   query: (text, params) => pool.query(text, params),
// }

