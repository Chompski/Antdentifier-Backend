const mongoose = require('mongoose');
const antdata = require('./devData/antdata.json')
const seedDB = require('./seed')
const {DB_url} = require('../config')

mongoose.connect(DB_url)
.then(() => {

   return seedDB(antdata)

})
.then(([antdata]) => {
    console.log (`Added ${antdata.length} species data`)
    return mongoose.disconnect()
})