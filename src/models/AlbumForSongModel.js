const sequelize = require("../config/Database")
const DataTypes = require("sequelize")

const AlbumForSongModel = sequelize.define("albums",{
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

module.exports = AlbumForSongModel