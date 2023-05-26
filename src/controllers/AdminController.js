const adminService = require("../services/AdminService")
const indexFile = require("../../index")
exports.createConcert = (req,res)=>{
    var user = indexFile.getUser(req.cookies["session"])
    res.render("concert/addConcert",{layout:"layouts/main",data:{"user":user}})
}

exports.findAllConcerts = async (req,res) =>
{
    var concerts = await adminService.findAllConcerts();
    res.json(concerts);
    //res.render("concert/main",{layout:"layouts/main",data:concerts});
}

exports.createAlbum = async(req,res)=>{
    var user = indexFile.getUser(req.cookies["session"])
    res.render("discography/addAlbum",{layout:"layouts/main",data:{user:user}})
}

exports.createSong = async(req,res)=>{
    var user = indexFile.getUser(req.cookies["session"])
    var album = await adminService.findAllAlbum()
    res.render("discography/addSong",{layout:"layouts/main",data:{"data":album,"user":user}})
}


exports.createConcertProccess = async(req,res)=>{
    var concert = {
        country:req.body.country,
        city:req.body.city,
        description:req.body.description,
        is_active:true,
        start_date:req.body.start_date
    }
    adminService.createConcert(concert).then(
        function (newConcert) {
            for(let i=0;i<req.body.cardsCount;i++)
            {
                adminService.createCard({
                    "is_sold":false,
                    "is_reserved":false,
                    "id_concert":newConcert.id_concert
                })
            }
            res.redirect("/concerts");
        }).catch(function (error) { res.render("",{layout:"layouts/main",msg:"Doslo je do greske"})});
}
exports.createAlbumProccess = async(req,res)=>{
    adminService.createAlbum(req.body).then(()=>res.redirect("/discography")).catch(err=>res.render("",{layout:"layouts/main",data:err}))
}

exports.createSongProccess = async(req,res)=>{
    adminService.createSong(req.body).then(()=>res.redirect("/discography")).catch(err=>res.render("",{layout:"layouts/main",data:err}))
}