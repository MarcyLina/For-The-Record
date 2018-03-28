var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/fortherecord");

module.exports.Album = require("./album");
module.exports.Song = require("./song");
