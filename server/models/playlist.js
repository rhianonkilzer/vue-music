let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
    name: {
        type: String,
        default: "Playlist"
    },

    songs: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Playlist', schema)