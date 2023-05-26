const sequelize = require("../config/Database")
const DataTypes = require("sequelize")
const SongModel = require("../models/SongModel")

const AlbumModel = sequelize.define("albums",{
    id_albums:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    album_name:{
        type: DataTypes.STRING,
        allowNull:false
    },
})

sequelize.sync().then(()=>console.log("Album table created successfully")).catch(err=>console.log(err))

AlbumModel.hasMany(SongModel,{
    foreignKey: 'id_albums',
    constraints: true
})


exports.findAllSongs = () => AlbumModel.findAll({
    include:{
        model:SongModel
    }
});

exports.findLastThreeSongs = () => AlbumModel.findAll({
    include:{
        model:SongModel,
        order:[["createdAt","DESC"]],
    limit:3
    }
})

exports.findAllSongsOnTheAlbum = () => AlbumModel.findAll({
include:{
    model:SongModel,
    order:[["createdAt","DESC"]]
}
})

exports.findAllAlbum = ()=>AlbumModel.findAll()


exports.create = (body)=>AlbumModel.create(body)
exports.findLastThreeSongsAtNewAlbum = ()=>sequelize.query("SELECT * FROM albums a INNER JOIN songs s ON a.id_albums=s.id_albums WHERE a.createdAt = (SELECT MAX(createdAt) FROM albums) ORDER BY s.createdAt DESC LIMIT 3")
