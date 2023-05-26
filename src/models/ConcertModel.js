const sequelize = require("../config/Database")
const DataTypes = require("sequelize")
const CardModel = require("./CardModel");

const ConcertModel = sequelize.define("concert",{
    id_concert:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    country:{
        type: DataTypes.STRING,
        allowNull:false
    },
    city:{
        type: DataTypes.STRING,
        allowNull:false
    },
    start_date:{
        type:DataTypes.DATE,
        allowNull:false
    },
    description:{
        type: DataTypes.STRING,
        allowNull:false
    },
    is_active:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        default:true
    }
})

ConcertModel.hasMany(CardModel,{
    foreignKey: 'id_concert'
})

sequelize.sync().then(()=>console.log("Concert table created successfully")).catch(err=>console.log(err))

module.exports.findAllConcerts = () => ConcertModel.findAll();

module.exports.findOneNonReservedCard = (idConcert) => ConcertModel.findAll(
    {
        include:
            {
                model:CardModel,
                where:{
                    is_reserved:false,
                    is_sold:false
                },
                limit:1
            },
        where:{id_concert:idConcert}
    }
    );
 module.exports.findOneNonBuyCard = (idConcert) => ConcertModel.findAll(
    {
        include:
            {
                model:CardModel,
                where:{
                    is_reserved:false,
                    is_sold:false
                },
                limit:1
            },
            where:{id_concert:idConcert}
    }
 );

 module.exports.findReservedCard = (data) => ConcertModel.findAll(
    {
        include:
            {
                model:CardModel,
                where:{
                    id_card:data.idCard,
                    id_user_reserved:data.idUser
                }
            }
    }
 );
module.exports.findLastThreeConcerts = ()=> ConcertModel.findAll({
    order:[["createdAt","DESC"]],
    limit:3
})

module.exports.findFutureConcerts =()=>ConcertModel.findAll({
    where:{"start_date":{[Op.gte]:new Date()}}
})

module.exports.create = (body)=>ConcertModel.create(body)
