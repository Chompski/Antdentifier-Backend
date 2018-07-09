const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AntSchema = new Schema({
 species: {
    type: String,
    required: true
  },
  colour: {
    type: [String],
    required: true
  },
  location: {
    type: String,
    requied: true
  },
  description: {
    type: String,
    requied: true
  },
  rating: {
    type: Number,
    requied: true
  },
  nestTemperature: {
    type: String,
    requied: true
  },
  hibernation: {
    type: String,
    requied: true
  },
  diet: {
    type: String,
    requied: true
  },
  life: {
    type: String,
    requied: true
  },
  images: {
    type: [String],
    requied: true
  },

});

module.exports = mongoose.model('ants', AntSchema);
