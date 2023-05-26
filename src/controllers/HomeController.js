
const HomeService = require("../services/HomeService");
const indexFile = require("../../index")
exports.index = async(req,res)=>{
    var user = indexFile.getUser(req.cookies["session"])
    var lastSongs = await HomeService.findLastThreeSongs();
    var lastConcerts = await HomeService.findLastThreeConcerts();
    //var data = {"lastSongs":lastSongs,"lastConcerts":lastConcerts};
    //res.json(data);
    res.render("home/index",{layout:"layouts/main",data : {"lastSongs":lastSongs,"lastConcerts":lastConcerts,"user":user}})
}


exports.about = (req,res)=>{
    
    var user = indexFile.getUser(req.cookies["session"])
    //getAll().then(data=>res.json(data))
    res.render("home/about",{layout:"layouts/main",data : {"user":user}})
}
