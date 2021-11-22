const fs = require('fs')
const PATH = './'
module.exports = (app) =>{
    fs.readdirSync('./routes')
    .filter(f => !f.startsWith('.') && f.indexOf('index') == -1)
    .forEach(el => require(`${PATH}/${el}`)(app))
}