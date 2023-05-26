const AdminRoutes = require("express").Router()

//VIEW
AdminRoutes.get("/createalbum",require("../controllers/AdminController").createAlbum)
AdminRoutes.get("/createconcert",require("../controllers/AdminController").createConcert)
AdminRoutes.get("/createsong",require("../controllers/AdminController").createSong)
AdminRoutes.get("/concerts",require("../controllers/AdminController").findAllConcerts);

//PROCCESS
AdminRoutes.post("/addConcert",require("../controllers/AdminController").createConcertProccess)
AdminRoutes.post("/addalbum",require("../controllers/AdminController").createAlbumProccess)
AdminRoutes.post("/addsong",require("../controllers/AdminController").createSongProccess)

module.exports = AdminRoutes;