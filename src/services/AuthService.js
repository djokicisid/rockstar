const {createUser, findUserUsername} = require("../models/UserModel")

exports.createUser =(body)=>createUser(body)
exports.findUserUsername  =(body)=>findUserUsername(body)