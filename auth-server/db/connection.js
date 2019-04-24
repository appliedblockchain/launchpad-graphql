const { Pool } = require('pg')


const pool = new Pool({
  host: process.env.PGHOST || 'localhost',
  user: 'postgres'
})

module.exports = pool

