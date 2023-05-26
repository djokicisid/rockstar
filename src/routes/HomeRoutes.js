const HomeRoutes = require("express").Router()

HomeRoutes.get("",require("../controllers/HomeController").index)
HomeRoutes.get("/api",require("../controllers/HomeController").index)
HomeRoutes.get("/about",require("../controllers/HomeController").about)

module.exports = HomeRoutes