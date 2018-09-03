
let router = require('express').Router()
let playlist = require('../models/playlist')
let mongoose = require('mongoose')
let ObjectId = mongoose.Types.ObjectId

router.get('/', (req, res, next) => {
    playlist.find({})
        .then(playlist => {
            return res.send(playlist)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    playlist.create(req.body)
        .then(playlist => {
            return res.send(playlist)
        })
        .catch(next)
})

router.put('/:id', (req, res, next) => {
    playlist.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.send({
            message: "add successful"
        }))
        .catch(next)
})


module.exports = router