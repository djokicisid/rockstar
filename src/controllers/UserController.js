const { getAll, create, update, getOne, deleteOne } = require("../services/UserService")

//VIEW
exports.index = (req,res)=>{
    getAll().then(data=>res.json(data))
    //res.render("user/index",{layout:"layouts/main",msg:"Hello"})
}
exports.create = (req,res)=>{
    //res.render("user/create",{layout:"layouts/blank"})
}
exports.one = (req,res)=>{
    getOne(req.params.id).then((data)=>res.json(data)).catch(err=>res.json(err))
}


//PROCCESS
exports.createProccess = (req,res)=>{
    create(req.body).then(()=>res.send("Uspesno dodato")).catch(err=>res.json(err))
}

exports.updateProccess = (req,res)=>{
    update(req.params.id,req.body).then(()=>res.send("Uspesno azuriran")).catch(err=>res.json(err))
}

exports.deleteByIdProccess = (req,res)=>{
    deleteOne(req.params.id).then(()=>res.send("Uspesno izbrisan")).catch(err=>res.json(err))
}