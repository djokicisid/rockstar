const sequelize = require("../config/Database")
const DataTypes = require("sequelize")

const UserModel = sequelize.define("users",{
    id_users:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    firstname:{
        type: DataTypes.STRING,
        allowNull:false
    },
    lastname:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false
    },
    username:{
        type: DataTypes.STRING,
        allowNull:false
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    },
    role:{
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue:"user"
    },
})



sequelize.sync().then(()=>console.log("User table created successfully")).catch(err=>console.log(err))

module.exports = UserModel
module.exports.createUser =(body)=>UserModel.create(body)
module.exports.findUserUsername =(body)=>UserModel.findOne({where:{username:body.username}})