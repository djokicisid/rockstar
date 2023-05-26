const sequelize = require("../config/Database")
const DataTypes = require("sequelize")
const UserModel = require("./UserModel")
const ConcertModel = require("./ConcertModel")

const CardModel = sequelize.define("card",{
    id_card:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    is_sold:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        default:true
    },
    is_reserved:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        default:true
    }
})

CardModel.belongsTo(UserModel,{
    foreignKey: 'id_user_bought',
    constraints: true
})

CardModel.belongsTo(UserModel,{
    foreignKey: 'id_user_reserved',
    constraints: true
})

sequelize.sync().then(()=>console.log("Card table created successfully")).catch(err=>console.log(err))

exports.create = (body) => CardModel.create(body);

module.exports = CardModel