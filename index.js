const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser');
require('dotenv-safe').config({allowEmptyValues:true})
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const config = process.env
require('./database/sequelizeMysql')
require('./database/sequelizePostGresql')
require('./routes')(app)
app.listen(config.PORT,() => console.log('ok'))