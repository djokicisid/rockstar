const  Sequelize = require('sequelize')
const sequelize = new Sequelize(
    'rockstar',
    'root',
    '',
    {
        host:"localhost",
        port:3306,
        dialect:"mysql"
    }
)

sequelize.authenticate().then(()=>console.log("Success connection")).catch(err=>console.log("Error: "+err))
module.exports = sequelize