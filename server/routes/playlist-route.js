
let router = require('express').Router()
let Playlist = require('../models/playlist')
let mongoose = require('mongoose')
let ObjectId = mongoose.Types.ObjectId

router.get('/', (req, res, next) => {
    Playlist.find({})
        .then(playlist => {
            return res.send(playlist)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Playlist.create(req.body)
        .then(playlist => {
            return res.send(playlist)
        })
        .catch(next)
})

router.put('/:id', (req, res, next) => {
    Playlist.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send({
            message: "song added"
        }))
        .catch(next)
})


module.exports = router