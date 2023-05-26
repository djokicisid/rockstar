const sequelize = require("../config/Database")
const CardModel = require("../models/CardModel")
const  Op = require('sequelize').Op

module.exports.reserveCard = (card) => {
    return CardModel.update(
        {
            is_reserved:true,
            id_user_reserved:card.id_user_reserved
        },
        {
            where:{id_card:card.id_card}
        }
    )
}

module.exports.buyCard = (card) => {
    return CardModel.update(
        {
            is_reserved:true,
            is_sold:true,
            id_user_bought:card.id_user_bought,
            id_user_reserved:card.id_user_reserved
        },
        {
            where:{id_card:card.id_card}
        }
    )
}

module.exports.findAllCardsOfUser = (idUser) =>
{
    return CardModel.findAll(
        {
            where:
            {
                [Op.or]:[{id_user_bought:idUser},{id_user_reserved:idUser}]
            }
        }
    );
}