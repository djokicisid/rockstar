const UserRoutes = require("express").Router()


//VIEW
UserRoutes.get("",require("../controllers/UserController").index)
UserRoutes.get("create",require("../controllers/UserController").create)
UserRoutes.get("/:id",require("../controllers/UserController").one)


//PROCCESS
UserRoutes.post("createProccess",require("../controllers/UserController").createProccess)
UserRoutes.put("updateProccess/:id",require("../controllers/UserController").updateProccess)
UserRoutes.delete("deleteProccess/:id",require("../controllers/UserController").deleteByIdProccess)


module.exports = UserRoutes