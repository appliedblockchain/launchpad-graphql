const pool = require('./connection')

const findOne = async email => {
  try {
    const res = await pool.query('SELECT * FROM person WHERE email = $1', [ email ])
    return res.rows[0]
  } catch (error) {
    console.error(error.stack)
  }
}

module.exports = {
  findOne
}