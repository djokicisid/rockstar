
const DiscographyService = require("../services/DiscographyService");
const indexFile = require("../../index")
exports.index = async(req,res)=>{
    var user = indexFile.getUser(req.cookies["session"])
    var allSongs = await DiscographyService.findAllSongs();
    //res.json(allSongs);
    res.render("discography/main",{layout:"layouts/main", data:{"data":allSongs,"user":user}})
}