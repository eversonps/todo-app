const mongoose = require("mongose")

mongoose.Promise = global.Promise
module.exports = mongoose.connect("mongodb://localhost/todo")

