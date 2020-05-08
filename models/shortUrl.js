const mongoose = require('mongoose');
const shortId = require('shortid');

const shortUrlSchema = new mongoose.Schema({
    target: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('shortUrl', shortUrlSchema);
