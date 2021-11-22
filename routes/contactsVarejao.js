module.exports = app =>{
    const Controller = require('../controllers/contactsVarejao')(app)
    app.route('/api/varejao/contacts').get(Controller.verifyJWT,Controller.getAll)
    app.route('/api/varejao/contacts/:id').get(Controller.getOne)
    app.route('/api/varejao/contacts/:id').put(Controller.update)
    app.route('/api/varejao/contacts/:id').delete(Controller.deleteOne)
    app.route('/api/varejao/contacts').post(Controller.create)
    app.route('/api/varejao/user/login').post(Controller.login)
    
}