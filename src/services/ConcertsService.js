const ConcertModel = require("../models/ConcertModel")


exports.findAllConcerts = () => {
    return ConcertModel.findAllConcerts();
}

exports.findOneNonReservedCard = (concertId) =>
{
    return ConcertModel.findOneNonReservedCard(concertId);
}

exports.findOneNonBuyCard = (concertId) =>
{
    return ConcertModel.findOneNonBuyCard(concertId);
}

exports.findReservedCard = (data) =>
{
    return ConcertModel.findReservedCard(data);
}