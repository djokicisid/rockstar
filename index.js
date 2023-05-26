const express = require("express")
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const HomeRoutes = require("./src/routes/HomeRoutes")
const UserRoutes = require("./src/routes/UserRoutes")
const AuthRoutes = require("./src/routes/AuthRoutes")
const DiscographyRoutes = require("./src/routes/DiscographyRoutes")
const ConcertRoutes = require("./src/routes/ConcertsRoutes")
const AdminRoutes = require("./src/routes/AdminRoutes")
const app = express()
const PORT = 3000

app.use(express.json())

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(cookieParser());

app.use(require("express-ejs-layouts"))
app.use(express.static("public"))
app.set("view engine","ejs")

var sessions = {};
var user;

const addSession = (sessionId,user) => {
    sessions[sessionId]=user;
}

const getUser = (sessionId)=>{
    return sessions[sessionId];
}

const clearUser = (sessionId)=>{

     return sessions[sessionId]=null;
    
    }

const authorized =(req,res,next)=>{

    var sessionId;
    if(typeof(req.cookies)!='undefined')
        sessionId = req.cookies["session"];
    user = sessions[sessionId];
    if(req.path=="/admin")
    {
        if(typeof(user)!='undefined')
        {
            if(user.role=='admin') 
            {
                next();
            }
            else
            {
                res.redirect('/auth/login');
            }
        }
        else
            res.redirect('/auth/login');
    }
    else
    {
        switch(req.path)
        {
            case "/buyCard":
                {
                    if(typeof(user)!='undefined')
                    {
                        next();
                    }
                    else
                    {
                        res.redirect('/auth/login');
                    }
                }
            default:
                next();
        }
    }
    
}

// ROUTES

app.use("/",authorized,HomeRoutes)
app.use("/auth",authorized,AuthRoutes)
app.use("/user",authorized,UserRoutes)
app.use("/",authorized,DiscographyRoutes)
app.use("/",authorized,ConcertRoutes)
app.use("/admin",authorized,AdminRoutes)


// PAGE NOTFOUND
app.use((req,res)=>{
    res.status(404).render("error/notFound",{layout:"layouts/blank"})
})

app.listen(PORT,()=>console.log(`Listen app port ${PORT}`))

module.exports.addSession = addSession;

module.exports.getUser = getUser;
module.exports.clearUser= clearUser;