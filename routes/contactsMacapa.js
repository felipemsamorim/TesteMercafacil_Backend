module.exports = app =>{
    const Controller = require('../controllers/contactsMacapa')(app)
    app.route('/api/macapa/contacts').get(Controller.verifyJWT,Controller.getAll)
    app.route('/api/macapa/contacts/:id').get(Controller.verifyJWT,Controller.getOne)
    app.route('/api/macapa/contacts/:id').put(Controller.verifyJWT,Controller.update)
    app.route('/api/macapa/contacts/:id').delete(Controller.verifyJWT,Controller.deleteOne)
    app.route('/api/macapa/contacts').post(Controller.verifyJWT,Controller.create)
    app.route('/api/macapa/user/login').post(Controller.login)
    
}