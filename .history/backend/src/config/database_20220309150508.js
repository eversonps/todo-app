const { mongo } = require("mongoose")
const mongoose = require("mongoose")

mongoose.Promise = global.Promise
module.exports = mongo.connect("mongodb://localhost/todo")