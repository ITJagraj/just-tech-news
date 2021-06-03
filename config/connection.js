// import the Sequelize constructor from the library
const Sequelize = require('sequelize');
require('dotenv').config();

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, { //importing the base Sequelize class and using it to create a new connection to the database
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

//To deploy the application, you had to set the server's port configuration
const PORT = process.env.PORT || 3001; //process.env.port is because Heroku reserve the port 3001 for us and will provide a port dynamically



module.exports = sequelize;
