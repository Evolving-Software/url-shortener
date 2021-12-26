const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const urlSchema = new Schema({
    longUrl: String,
    shortUrl: String,
    urlCode: String,
    date: Date
});

module.exports = mongoose.models.Url || mongoose.model('Url', urlSchema);