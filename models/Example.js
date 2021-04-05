const mongoose = require('./db')
const Schema = mongoose.Schema;

const exampleSchema = new Schema({
    title: String,
    designer: String,
    developer: String
})

module.exports = mongoose.model('Example', exampleSchema)