const { Pool, Client } = require('pg')


const pool = new Pool({
  host: process.env.PGHOST || 'localhost',
  user: 'postgres'
})

console.log('pool*', pool, process.env.PGHOST)

module.exports = pool

