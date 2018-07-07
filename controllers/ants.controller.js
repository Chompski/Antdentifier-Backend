const Ants = require('../models/Antdata')

function getAnts(req, res, next) {
    Ants
        .find(req.query)
        .lean()
        .then(ants => {
            res.status(200).send(ants);
        })
        .catch(error => {
            if (error.status === 404) return next({ status: 404, message: '404 ants not found' })
            if (error.name === "CastError") return next({ status: 400, message: '400 bad request' })
        })
}

module.exports = { getAnts }