const Pool = require('pg').Pool
const pool = new Pool({
    user: 'samhern',
    host: 'localhost',
    database: 'linksAPI',
    password: 'Nosmas17!',
    port: 5432,
})

const getLinks = (req, res) => {
    pool.query('SELECT * FROM favlinks ORDER BY id ASC'
    , (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
}

module.exports = {
    getLinks,
}