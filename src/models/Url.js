const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Todo: Add Label and Description


const urlSchema = new Schema({
    longUrl: String,
    shortUrl: String,
    urlCode: String,
    date: Date,
    label: String,
    description: String
});

module.exports = mongoose.models.Url || mongoose.model('Url', urlSchema);