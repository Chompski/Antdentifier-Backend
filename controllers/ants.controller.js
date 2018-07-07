const Ants = require('../models/Antdata')

function getAnts(req, res, next) {
    Ants
        .find()
        .lean()
        .then(ants => {
            res.status(200).send(ants);
        })
        .catch(error => {
            if (error.status === 404) return next({ status: 404, message: '404 article not found' })
            if (error.name === "CastError") return next({ status: 400, message: '400 bad request' })
        })
}

function getAntSpecies(req, res, next) {
    const antSpecies = req.params.species
    Ants
        .find({species: antSpecies})
        .lean()
        .then(ants => {
            res.status(200).send(ants);
        })
        .catch(error => {
            if (error.status === 404) return next({ status: 404, message: '404 article not found' })
            if (error.name === "CastError") return next({ status: 400, message: '400 bad request' })
        })
}

function getAntLocation(req, res, next) {
    const antlocation = req.params.location
    Ants
        .find({location: antlocation})
        .lean()
        .then(ants => {
            res.status(200).send(ants);
        })
        .catch(error => {
            if (error.status === 404) return next({ status: 404, message: '404 article not found' })
            if (error.name === "CastError") return next({ status: 400, message: '400 bad request' })
        })
}


module.exports = { getAnts, getAntSpecies, getAntLocation }