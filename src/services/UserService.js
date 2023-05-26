const {createUser, findUserUsername} = require("../models/UserModel")

/*exports.getAll = ()=>UserModel.findAll()
exports.getOne = (idU)=>UserModel.findOne({where:{id:idU}})

exports.create = (body)=>UserModel.create(body)
exports.update = (idU,body)=>UserModel.update({username:body.username,password:body.password},{where:{id:idU}})
exports.deleteOne = (idU)=>UserModel.destroy({where:{id:idU}})*/

exports.createUser =(body)=>createUser(body)
exports.findUserUsername  =(body)=>findUserUsername(body)