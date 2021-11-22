const Sequelize = require('sequelize')
const userModel = require('../models/contacts')
const mySQLContext = new Sequelize(process.env.MYSQL_DBNAME,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASS, {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})
const Contacts = userModel(mySQLContext, Sequelize)

mySQLContext.authenticate()
    .then(() => console.log('mysqldb logged'))
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = {
    Contacts
}