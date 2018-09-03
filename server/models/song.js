let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
    albumArt: {
        type: String,
        require: true
    },
    artist: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    },
    preview: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Song', schema)
