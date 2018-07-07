const mongoose = require('mongoose');
const Ants = require('../models/Antdata')

function seedDB (antdata) {
   
    return  mongoose.connection.dropDatabase()
        .then(() => {
            console.log('dropped')

            return Promise.all([Ants.insertMany(antdata)])

        }).catch(console.log)
   
}

module.exports = seedDB