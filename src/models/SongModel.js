const sequelize = require("../config/Database")
const DataTypes = require("sequelize")

const SongModel = sequelize.define("songs",{
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
module.exports = SongModel

sequelize.sync().then(()=>console.log("Song table created successfully")).catch(err=>console.log(err))

exports.create=(body)=>SongModel.create(body)