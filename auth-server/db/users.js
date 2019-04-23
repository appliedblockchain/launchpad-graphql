const pool = require('./connection')

const findOne = async userId => {
  try {
    const res = await pool.query('SELECT * FROM person WHERE id = $1', [ userId ])
    console.log('RES', res)
    return res.rows[0]
  } catch (error) {
    console.log(error.stack)
  }
}

module.exports = {
  findOne
}