const { Contacts } = require('../database/sequelizeMysql')
const { transformContact,TYPE } = require('../helpers/mapping')
const jwt = require('jsonwebtoken')
module.exports = app => {
    return {
        login: (req, res) => {
            try {
                const User = req.body;
                let r = (req.body.name && req.body.password)
                    ? jwt.sign({ name: User.name , client:'macapa'}, process.env.JWT_SECRET, { expiresIn: 3000 })
                    : { error: 'invalid user/password' }
                res.status(r.error ? 300 : 200).json(r)
            } catch (error) {
                res.status(500).json(error)
            }
        },
        getAll: (req, res) => {
            try {
                Contacts.findAll().then(r => res.status(200).json(r))
            } catch (error) {
                res.status(500).json(error)
            }
        },
        create: (req, res) => {
            try {
                let fields = Object.keys(req.body)
                //se for um array de contacts
                if (fields.length == 1 && fields.indexOf('contacts') > -1) {
                    let inserteds = []
                    req.body.contacts.forEach(c => {
                        const obj = transformContact(TYPE.MACAPA,c)
                        Contacts.create(obj).then(r => inserteds.push(c))
                    });
                    res.status(200).json({'total':inserteds.length,'registros':inserteds})
                } else {
                    //se for apenas um obj de contacts
                    (fields.indexOf('name') > -1 && fields.indexOf('cellphone') > -1)
                        ?
                        Contacts.create(transformContact(TYPE.MACAPA,req.body)).then(r => res.status(200).json(r))
                        :
                        res.status(500).json({ msg: 'Invalid request' })
                }

            } catch (error) {
                res.status(500).json(error)
            }
        },
        getOne: (req, res) => {
            try {
                Contacts.findOne({ id: req.params.id }).then(c => res.status(200).json(c))
            } catch (error) {
                res.status(500).json(error)
            }
        },
        update: (req, res) => {
            try {
                Contacts.update(req.body, { where: { id: req.params.id } }).then(c => res.status(200).json(c))
            } catch (error) {
                res.status(500).json(error)
            }
        },
        deleteOne: (req, res) => {
            try {
                Contacts.destroy({ where: { id: req.params.id } }).then(c => res.status(200).json(c))
            } catch (error) {
                res.status(500).json(error)
            }
        },
        verifyJWT: (req, res, next) => {
            try {
                let token = req.headers['authorization']
                if (!token) {
                    res.status(401).json({ auth: false, message: 'empty token' })
                } else {
                    token = token ? token.replace('Bearer ', '') : token
                    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                        if (err) {
                            res.status(401).json({ auth: false, message: err.message })
                        } else {
                            req = decoded
                            next()
                        }
                    })
                }

            } catch (error) {
                res.status(500).json(error)
            }
        }
    }
}