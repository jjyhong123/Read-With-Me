const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema 
const ImageSchema = new Schema({
    image: String
});

const Image = mongoose.model('image', ImageSchema);

module.exports = Image;