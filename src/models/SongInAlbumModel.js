const sequelize = require("../config/Database")
const DataTypes = require("sequelize")
const AlbumForSongModel = require("./AlbumForSongModel")

const SongInAlbumModel = sequelize.define("songs",{
    id_songs:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
     song_name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    yt_link:{
        type: DataTypes.STRING,
        allowNull:false
    }
})

SongInAlbumModel.belongsTo(AlbumForSongModel,{
    foreignKey: 'id_albums',
    constraints: true
})

sequelize.sync().then(()=>console.log("Song table created successfully")).catch(err=>console.log(err))

exports.findLastThreeSongs = () => SongInAlbumModel.findAll(
    {
        include : {
            model:AlbumForSongModel,
            order:[["created_at","DESC"]]
        },
        limit:3   
    }
)
