const Sequelize = require('sequelize')
const userModel = require('../models/contacts')
const PGSQLContext = new Sequelize(process.env.PGSQL_DBNAME,
    process.env.PGSQL_USER,
    process.env.PGSQL_PASS, {
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})
const Contacts = userModel(PGSQLContext, Sequelize)

PGSQLContext.authenticate()
    .then(() => console.log('postgres logged'))
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = {
    Contacts
}