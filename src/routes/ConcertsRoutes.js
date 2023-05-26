const ConcertRoutes = require("express").Router()

ConcertRoutes.get("/concerts",require("../controllers/ConcertsController").index);
ConcertRoutes.get("/concerts/reserveCard/:id_concert",require("../controllers/ConcertsController").reserveCard);
ConcertRoutes.get("/concerts/buyCard/:id_card",require("../controllers/ConcertsController").buyCard);
ConcertRoutes.get("/concerts/buyReservedCard/:id_card",require("../controllers/ConcertsController").buyReservedCard);
ConcertRoutes.get("/concerts/usersCards",require("../controllers/ConcertsController").findCardsOfUser);

module.exports = ConcertRoutes;