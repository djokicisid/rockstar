const ConcertModel = require("../models/ConcertModel")
const AlbumModel = require("../models/AlbumModel")
const SongsModel = require("../models/SongModel")
const CardModel = require("../models/CardModel")

module.exports.findAllAlbum  = ()=>AlbumModel.findAllAlbum()
module.exports.createConcert = async (body)=>
{
    return ConcertModel.create(body);
}
module.exports.createAlbum = (body)=>AlbumModel.create(body)
module.exports.createSong = (body)=>SongsModel.create(body)
module.exports.findAllConcerts = ()=>ConcertModel.findAllConcerts();
module.exports.createCard = (body) => {
    CardModel.create(body);
}