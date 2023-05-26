const DiscographyRoutes = require("express").Router()

DiscographyRoutes.get("/discography",require("../controllers/DiscographyController").index);

module.exports = DiscographyRoutes;