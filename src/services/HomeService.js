const {findLastThreeConcerts} = require("../models/ConcertModel")
const {findLastThreeSongs} = require("../models/SongInAlbumModel")

exports.findLastThreeSongs = () => findLastThreeSongs();
exports.findLastThreeConcerts = () => findLastThreeConcerts();
