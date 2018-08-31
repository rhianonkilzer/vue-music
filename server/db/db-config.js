let mongoose = require("mongoose")
const connectionStr = 'mongodb://rhianon:meowmix91@ds018508.mlab.com:18508/mytunes'
let connection = mongoose.connection

mongoose.connect(connectionStr, {
    useNewUrlParser: true
})

connection.on('error', err => {
    console.log("DB ERROR:", err)
})

connection.once('open', () => {
    console.log("connected to db")
})