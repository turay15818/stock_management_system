const { Sequelize } = require ("sequelize");

const db = new Sequelize('inventory', 'root', '!Love2code', {
    host: "localhost",
    dialect: "mysql"
});



 
 


module.exports = db;
