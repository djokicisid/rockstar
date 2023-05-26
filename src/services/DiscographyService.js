const AlbumModel = require("../models/AlbumModel");

exports.findAllSongs = () => {
    return AlbumModel.findAllSongs();
};